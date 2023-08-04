import React, { useState} from 'react';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { 
  DragDropField,
  UploadForm
} from './Drag-drop.styles';
import { ReactComponent as Upload } from '../../icons/uploadimage.svg'
import {useSelector} from 'react-redux'
import { selectCurrentTheme } from '../../store/theme/theme.selector';
import { selectCurrentUser } from '../../store/user/user.selecter';

const ContactsDragDrop = () => {
  const [file, setFile] = useState();
  const [dragOver, setDragOver] = useState(false)
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
        fetch('https://fmp-api.onrender.com/uploadcontacts', {
          method: 'post',
          headers: {'Content-Type': 'text/plain',
                    'email': currentUser.email},
          body: file
          })
          .then((response)=> response.json())
          .then((object) => {
            confirmAlert({
            message: "Your data has been received.",
            buttons: [
                {label: "Return to Page",}  
            ]
            });
            
          })
      } else {
        event.preventDefault();
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

}

export default ContactsDragDrop