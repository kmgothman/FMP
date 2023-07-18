import React, { ChangeEvent, useState, useContext} from 'react';
import { UserContext } from '../../contexts/user.context';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from 'react-router-dom'

const ContactsDragDrop = () => {
    const [file, setFile] = useState();
    const { currentUser } = useContext(UserContext)
  
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
        fetch('http://localhost:3000/uploadcontacts', {
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
    return (
        <div className="dragDropField">
            <p>upload your contacts here</p>
        <form onSubmit={handleSubmit}>
          <label>
            Upload file:
            <input type="file" onChange={handleFileChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );

}

export default ContactsDragDrop