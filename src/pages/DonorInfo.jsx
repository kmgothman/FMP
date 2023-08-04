import React, { useEffect, useState} from 'react';
import {useLocation} from "react-router-dom"
import {
	MainContainer,
	ContentContainer,
	ContentControlsContainer,
	TableContainer,
	TitleContainer,
	ContactInfoDiv
} from './DonorInfo.styles';
import Loading from '../icons/loading.gif'
import {useSelector} from 'react-redux'
import { selectCurrentTheme } from '../store/theme/theme.selector';
import { selectCurrentUser } from '../store/user/user.selecter';

const DonorInfo = () => {
	const currentUser = useSelector(selectCurrentUser)
	const currentTheme = useSelector(selectCurrentTheme)
	const [ currentPage, setCurrentPage] = useState('contactinfo')
	let {state} = useLocation()
	const [ loading , setLoading ] = useState(false)

	const [donorInfo, setdonorInfo] = useState({
		'contactinfo': {
			'email' : '',
			'address': '',
			'postalcode': ''
		},
		'tasks': [],
		'history': [],
		'donations': []
	})

	useEffect(()=> {
		setLoading(true)
			fetch('https://fmp-api.onrender.com/donorinfo', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				donorcode: state.donorcode,
				name: state.name,
				email: currentUser.email
		})
		})
		.then(response => response.json())
		.then(object => {
			
			setdonorInfo(object)
			setLoading(false)
		})
	},[])

	const pageClick = (page) => {
		setCurrentPage(page)
	}

	const handleCompletePush = (task) => {
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

	const renderSwitch = ( page )=> {
		switch(page) {
			case 'contactinfo':
				return(
					<ContactInfoDiv>
						<div>
							<b>Address</b>
							<p>{donorInfo.contactinfo.address}</p>
							<p>{donorInfo.contactinfo.city}, {donorInfo.contactinfo.state}</p>
							<p>{donorInfo.contactinfo.postalcode}</p>
						</div>
						<div>
							<b>Phone</b>
							<p>{donorInfo.contactinfo.phone}</p>
							<b>Email</b>
							<p>{donorInfo.contactinfo.email}</p>
						</div>
						<div>
							<b>Donor Code</b>
							<p>{donorInfo.contactinfo.donorcode}</p>
						</div>
					</ContactInfoDiv>
				);
			case 'donations':
				return(
					<table>
						<tr >
							<th>Gift Amount</th>
							<th>Date</th>
							<th>Donor Code</th>
							<th>Memo</th>
						</tr>
						{donorInfo.donations.map(x => (
						<tr key={x.code}>
							<td>{x.amount}</td>
							<td>{x.giftdate}</td>
							<td>{x.donorcode}</td>
							<td>{x.memo}</td>
						</tr>
						))}
						<tr>
							<th >Total ({donorInfo.donations.length} Donations): </th>
						</tr>
					</table>
				);
			case 'tasks':
				return(
					<table>
						<tr className="tableHead">
							<td></td>
							<td>Name</td>
							<td>Date</td>
							<td>Type</td>
							<td>Discription</td>
							<td>Donor Code</td>
						</tr>
						{donorInfo.tasks.map((task) => { 
							return(
							<tr key={task.taskid}>
								<td><button onClick={()=>handleCompletePush(task)}>Complete</button></td>
								<td >{task.name}</td>
								<td>{task.date}</td>
								<td>{task.type}</td>
								<td>{task.description}</td>
								<td >{task.donorcode}</td>
							</tr>)
						})}
					</table>
				);
			case 'history':
				return(
					<table>
						<tr className="tableHead">
							<td></td>
							<td>Name</td>
							<td>Date</td>
							<td>Type</td>
							<td>Discription</td>
							<td>Donor Code</td>
						</tr>
						{donorInfo.history.map((task) => { 
							return(
							<tr key={task.taskid}>
								<td><button onClick={()=>handleCompletePush(task)}>Incomplete</button></td>
								<td >{task.name}</td>
								<td>{task.date}</td>
								<td>{task.type}</td>
								<td>{task.description}</td>
								<td >{task.donorcode}</td>
							</tr>)
						})}
					</table>
				);
		}
	  }

	return(
		<MainContainer>
		<ContentContainer>
			<ContentControlsContainer>
					<div>
						<button style={currentPage === 'contactinfo' ? ({color: currentTheme.eighth, 'border-bottom': 'solid 2px' }) : ({background: 'none'})} onClick={()=>pageClick('contactinfo')}>Contact Info</button>
						<button style={currentPage === 'donations' ? ({color: currentTheme.eighth, 'border-bottom': 'solid 2px' }) : ({background: 'none'})} onClick={()=>pageClick('donations')}>Donations</button>
						<button style={currentPage === 'tasks' ? ({color: currentTheme.eighth, 'border-bottom': 'solid 2px' }) : ({background: 'none'})} onClick={()=>pageClick('tasks')}>Tasks</button>
						<button style={currentPage === 'history' ? ({color: currentTheme.eighth, 'border-bottom': 'solid 2px' }) : ({background: 'none'})} onClick={()=>pageClick('history')}>History</button>
					</div>
			</ContentControlsContainer>
		<TitleContainer>
			<h1>{donorInfo.contactinfo.name}</h1><h1>Donor Since: May 2023</h1>
		</TitleContainer>
		<TableContainer>
			{loading ? (<img src={Loading} alt='loading...' width='70px' height='70px'/>) : ( renderSwitch(currentPage))}
		</TableContainer>
		</ContentContainer>
		</MainContainer>
	);

}

export default DonorInfo;



