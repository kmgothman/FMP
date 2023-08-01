import React, {Component, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {UserContext} from '../contexts/user.context'
import {ThemeContext} from '../contexts/theme.context'
import { confirmAlert } from "react-confirm-alert";


import { 
	MainContainer,
	ContentContainer,
	TableContainer,
	ContentControlsContainer,
	NewTaskDiv
 } from './Tasks.styles';

 import Header from '../components/header/header'
 import NewTask from '../components/new-task/newTask';

import {ReactComponent as Plus} from '../icons/plus.svg'
import {ReactComponent as SearchIcon} from '../icons/search.svg'
import Loading from '../icons/loading.gif'

const Tasks = () => {		
	const { currentUser } = useContext(UserContext)
	const { currentTheme } = useContext(ThemeContext)
	const [tasks, setTasks] = useState([])
	const [newTaskForm, setNewTaskForm] = useState(false)
	const [loading, setLoading ] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://fmp-api.onrender.com/tasks', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			
			setTasks(object)
			setLoading(false)
		})
	}, [])

    const handleCompletePush=(task)=> {
        fetch('https://fmp-api.onrender.com/taskcompletetoggle', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email,
            task: task
		})
		})
        .then(()=>window.location.reload(false))
    }

	const addTaskClick = () => {
		setNewTaskForm(!newTaskForm)
	}

	const handleCompleteAll = () => {
        confirmAlert({
            message: "Mark all tasks as complete?",
            buttons: [
              {
                label: "Return to Page",
              },
              {
                label: "Mark Complete",
				onClick: () => {
					fetch('https://fmp-api.onrender.com/completeAllTasks', {
						method: 'post',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({
							email: currentUser.email
						})
						})
						.then((response) => response.json())
						.then((object) => {
							window.location.reload(false);
							})
				}
              }
              
            ]
          });

    }

	return(
		<MainContainer>
		<ContentContainer>
			<ContentControlsContainer>
				<NewTaskDiv>
					<button onClick={addTaskClick}><Plus width='20' height='20' fill={currentTheme.third} stroke={currentTheme.third}/>Add Task</button>
				</NewTaskDiv>
				{newTaskForm ? <NewTask setNewTaskForm={setNewTaskForm}/> : <></>}
				<button onClick={handleCompleteAll}>Complete All</button>
			</ContentControlsContainer>
		<TableContainer>
			{loading ? (
				<img src={Loading} alt='loading...' width='70px' height='70px'/>
			) : (
				<table>
				<tr className="tableHead">
                    <td></td>
					<td>Name</td>
					<td>Date</td>
					<td>Type</td>
					<td>Discription</td>
					<td>Donor Code</td>
				</tr>
				{tasks.map((task) => { 
					return(
				<tr key={task.taskid}>
                    <td><button onClick={()=>handleCompletePush(task)}>Complete</button></td>
					<td ><Link to="/DonorInfo" state={{'name':task.name, 'donorcode':task.donorcode}}>{task.name}</Link></td>
					<td>{task.date}</td>
					<td>{task.type}</td>
					<td>{task.description}</td>
                    <td >{task.donorcode}</td>
					</tr>)
				})}
			</table>
			)}
			
		</TableContainer>
	</ContentContainer>
	</MainContainer>
	);
}
//td ><Link onClick={(event)=>this.handleDonorClick(x.donorcode,event)}to="/DonorInfo">{x.name}</Link></td>
export default Tasks;