import React, { useState} from 'react';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { 
  DragDropField,
  UploadForm,
  NewContactContainer,
  NewContactHead,
  ContactInfo,
  ExistingContactsContainer,
  ButtonsContainer,
  HeadContainer,
  BodyContainer
} from './Drag-drop.styles';
import { ReactComponent as Upload} from '../../icons/uploadimage.svg'
import { ReactComponent as Plus} from '../../icons/plus.svg'
import { ReactComponent as Previous} from '../../icons/left.svg'
import {useSelector} from 'react-redux'
import { selectCurrentTheme } from '../../store/theme/theme.selector';
import { selectCurrentUser } from '../../store/user/user.selecter';

const Drag_drop = () => {
  const [file, setFile] = useState();
  const [newDonorObject, setNewDonorObject] = useState({})
  const [newDonorNames, setNewDonorNames] = useState([])
  const [newDonorIndex, setNewDonorIndex] = useState(0)
  const [dragOver, setDragOver] = useState(false)
  const [existingDonorObject, setExistingDonorObject] = useState([])
  const [existingDonorNames, setExistingDonorNames] = useState([])
  const [filteredDonorNames, setFilteredDonorNames] = useState([])
  const [donorConfirmation, setDonorConfirmation] = useState({})
	const currentUser = useSelector(selectCurrentUser)
	const currentTheme = useSelector(selectCurrentTheme)
  

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    if (file) {
      event.preventDefault();
      
      fetch('https://fmp-api.onrender.com/file', {
        method: 'post',
        headers: {'Content-Type': 'text/plain',
                  'email': currentUser.email},
        body: file
        })
        .then((response)=> response.json())
        .then((object) => {
          let newNames = Object.keys(object.newContacts)
          let oldNames = Object.keys(object.existingContacts)
          if (newNames.length) {
            setNewDonorObject(object.newContacts)
            setNewDonorNames(newNames)
            setExistingDonorObject(object.existingContacts)
            setExistingDonorNames(oldNames)
            setFilteredDonorNames(oldNames)
          } else {
            setFile()
            confirmAlert({
              message: "Your data has been received.",
              buttons: [
                {
                  label: "Return to Page",
                }
                
              ]
            });
          }
        })
    } else {
      event.preventDefault();
    }
  }

  const handlePrevClick=() => {
		let current = newDonorIndex
		if (current === 0) {

		} else {
			let newIndex = current-1
			setNewDonorIndex(newIndex)
			
		}
	}


  const newDonorClick=()=>{
    let object = donorConfirmation
    object[newDonorNames[newDonorIndex]] = newDonorObject[newDonorNames[newDonorIndex]]
    setDonorConfirmation(object)

    let current = newDonorIndex
		let max = newDonorNames.length-1
		if (current === max) {
      fetch('https://fmp-api.onrender.com/confirmNewDonors', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
			    email: currentUser.email,
          contactsObject: donorConfirmation
		    })
		  })
      .then((response)=>response.json())
      .then(()=>window.location.reload(false))
		} else {
			let newIndex = current+1
			setNewDonorIndex(newIndex)
		}
  }

  const existingDonorClick=(existingName)=>{
    let object = donorConfirmation
    object[existingName] = newDonorObject[newDonorNames[newDonorIndex]]
    setDonorConfirmation(object)

    let current = newDonorIndex
		let max = newDonorNames.length-1
		if (current === max) {
      fetch('https://fmp-api.onrender.com/confirmNewDonor', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
			    email: currentUser.email,
          contactsObject: donorConfirmation
		    })
		  })
      .then((response)=>response.json())
      .then(()=>window.location.reload(false))
		} else {
			let newIndex = current+1
			setNewDonorIndex(newIndex)
		}
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files;
    setFile(files[0])
    setDragOver(false)
  }

  const handleEnter = (e) => {
    e.preventDefault()
  }
  const handleLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleSearch = (value) => {
    let input = value.toLowerCase()
		let namesArray = existingDonorNames
		setFilteredDonorNames(namesArray.filter((el)=>{
			if (el) {
				if (el === '') {
					return el
				} else {
					
					return el.toLowerCase().includes(input)
				}
			} 
		}))
  }

  if (!newDonorNames.length) {
  return (
    <DragDropField style={dragOver? ({background: currentTheme.fourth}):({background: currentTheme.sixth})} onDrop={handleDrop} onDragEnter={handleEnter} onDragOver={handleOver} onDragLeave={handleLeave}>
      <Upload width='100' height='100' stroke='white' fill='white'/>
      <p>Drag and Drop your file here</p>
      <p>OR</p>
      <UploadForm onSubmit={handleSubmit}>
          <div>
            <input type="file" accept='.csv' title='sdf' onChange={handleFileChange} />
            <p>{file? (file.name):(<></>)}</p>
          </div>
          <button type="submit">Upload</button>
      </UploadForm>
    </DragDropField>
  );
  } else {
    return(
    <NewContactContainer>
      <HeadContainer>
        <NewContactHead> 
          <b>New Contact: {newDonorIndex+1} of {newDonorNames.length}</b>
          <p>Is this an existing contact?</p>
        </NewContactHead>
        <ButtonsContainer>
          <div>
            <button style={{background: currentTheme.fifth, color: currentTheme.eighth}} onClick={handlePrevClick}><Previous width='20' height='20' stroke={currentTheme.eighth} fill={currentTheme.eighth}/>previous</button>
            <button onClick={newDonorClick}><Plus width='20' height='20' stroke={currentTheme.fourth} fill={currentTheme.fourth}/>New Contact</button>
          </div>
          <input type="text" placeholder="search contacts" onChange={event => handleSearch(event.target.value)}/>
        </ButtonsContainer>
        </HeadContainer>
      <BodyContainer>
        <ContactInfo>
          <p>{newDonorNames[newDonorIndex]}</p>
          <p>{newDonorObject[newDonorNames[newDonorIndex]].address}</p>
          <p>{newDonorObject[newDonorNames[newDonorIndex]].city}, {newDonorObject[newDonorNames[newDonorIndex]].state}</p>
        </ContactInfo>
        <ExistingContactsContainer>
            {filteredDonorNames.map((x)=>(
              <button key={x} onClick={()=>existingDonorClick(x)}>{x}</button>
            ))}
        </ExistingContactsContainer>
      </BodyContainer>
    </NewContactContainer>
  )}
}
export default Drag_drop