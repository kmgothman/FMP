import React, {useEffect, useState} from 'react';
import { Link} from "react-router-dom"
import { 
	MainContainer,
	ContentContainer,
	TableContainer,
	ContentControlsContainer,
 } from './Tasks.styles';

 import Loading from '../icons/loading.gif'

 import {useSelector} from 'react-redux'
import { selectCurrentUser } from '../store/user/user.selecter';

const History = () => {		
	const currentUser = useSelector(selectCurrentUser)
	const [tasks, setTasks] = useState([])
	const [ loading, setLoading ] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://fmp-api.onrender.com/history', {
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

	return(
		<MainContainer>
		<ContentContainer>
			<ContentControlsContainer>
				<h1>History</h1>
			</ContentControlsContainer>
		<TableContainer>
			{loading ? (<img src={Loading} alt='loading...' width='70px' height='70px'/>
			) : (
				<table>
					<tr >
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
						<td><button onClick={()=>handleCompletePush(task)}>Incomplete</button></td>
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
export default History;