import React, { ChangeEvent, useState, useContext} from 'react';
import { UserContext } from '../../contexts/user.context';
import { ThemeContext } from '../../contexts/theme.context';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from 'react-router-dom'
import { 
  DragDropField,
  UploadForm,
  NewContactContainer,
  NewContactHead,
  ContactInfo,
  ExistingContactsContainer,
  ButtonsContainer,
  LeftContainer,
  RightContainer,
  HeadContainer,
  BodyContainer
} from './Drag-drop.styles';
import { ReactComponent as Upload} from '../../icons/uploadimage.svg'

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
  const { currentUser } = useContext(UserContext)
  const { currentTheme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    if (file) {
      event.preventDefault();
      console.log(
        `Selected file - ${file}`
      );
      fetch('http://localhost:3000/file', {
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

	const handleNextClick=() => {
		let current = newDonorIndex
		let max = newDonorNames.length
		if (current === max) {

		} else {
			let newIndex = current+1
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
      fetch('http://localhost:3000/confirmNewDonors', {
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
      fetch('http://localhost:3000/confirmNewDonor', {
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
    console.log('enter!')
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
            <button onClick={newDonorClick}>New Contact</button>
            <button onClick={handlePrevClick}>prev</button>
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
              <li key={x}><button onClick={()=>existingDonorClick(x)}>{x}</button></li>
            ))}
        </ExistingContactsContainer>
      </BodyContainer>
    </NewContactContainer>
  )}
}
export default Drag_drop