import React, {Component, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {UserContext} from '../contexts/user.context'

const Tasks = () => {		
	const { currentUser } = useContext(UserContext)

	const [tasks, setTasks] = useState([])
	//const [donorCodes, setDonorCodes] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/tasks', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			console.log(object)
			setTasks(object)
			//setDonorCodes(Object.keys(object))
		})
	}, [])

    const handleCompletePush=(task)=> {
        fetch('http://localhost:3000/taskcompletetoggle', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email,
            task: task
		})
		})
        .then(()=>window.location.reload(false))
    }

	// const handleDonorClick=(donorcode, event) => {
	// 	this.props.loadDonorInfo(donorcode)
	// 	}

	return(
		<div>
		<div className="Main">
			<div id="Controls">
			<p></p>
				<p className="This">Tasks</p>
				<p></p>
			</div>
			<div className="Table">
            <button>Filter'task type, date, ect'</button>
			<table>
			<tbody>
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
				<tr className="row">
                    <td><button onClick={()=>handleCompletePush(task)}>action</button></td>
					<td >{task.name}</td>
					<td>{task.date}</td>
					<td>{task.type}</td>
					<td>{task.description}</td>
                    <td ><Link>{task.donorcode}</Link></td>
					</tr>)
})}
			</tbody>
			</table>
		</div>
				
		</div>
		</div>
	);
}
//td ><Link onClick={(event)=>this.handleDonorClick(x.donorcode,event)}to="/DonorInfo">{x.name}</Link></td>
export default Tasks;