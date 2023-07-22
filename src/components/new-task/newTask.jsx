import { 
    NewTaskContainer,
    LabelDiv,
    InputDiv
} from './newTask.styles'
import {useState, useContext} from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import { UserContext } from '../../contexts/user.context'


const NewTask = (props) => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
    const { currentUser, setCurrentUser} = useContext(UserContext)
    const [ donorName, setDonorName ] = useState('')
    const [ type, setType ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ donorCode, setDonorCode ] = useState('')

    const handleNameInput = (e) => {
        setDonorName(e.target.value)
    }
    const handleTypeInput = (e) => {
        setType(e.target.value)
    }
    const handleDescriptionInput = (e) => {
        setDescription(e.target.value)
    }
    const handleCodeInput = (e) => {
        setDonorCode(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        const task = {
            'complete' : false,
            'description' : description,
            'donorcode' : donorCode,
            'name' : donorName,
            'type' : type
        }
        //setLoading(true)
		fetch('https://fmp-api.onrender.com/createtask', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email,
            task: task
		})
		})
		.then((response) => response.json())
		.then((object) => {
            props.setNewTaskForm(false)
            window.location.reload(false);
			})
		
    }

    return(
        <NewTaskContainer>
            <b>Create New Task</b>
            <form>
                <div>
                    <LabelDiv>
                        <label for='dname'>Donor Name</label>
                        <label for='type'>Type</label>
                        <label for='descript'>Description</label>
                        <label for='dcode'>Donor Code</label>
                    </LabelDiv>
                    <InputDiv>
                        <input onChange={handleNameInput} type='text' name='dname'></input>
                        <input onChange={handleTypeInput} type='text' name='type'></input>
                        <input onChange={handleDescriptionInput} type='text' name='descript'></input>
                        <input onChange={handleCodeInput} type='text' name='dcode'></input>
                    </InputDiv>
                </div>
                
                <input onClick={handleSubmit} type='submit' value='Submit'/>
                
            </form>
        </NewTaskContainer>
    )
}

export default NewTask