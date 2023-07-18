import React, { useEffect, useState, useContext} from 'react';
import {BrowserRouter, Route, Link, useLocation} from "react-router-dom"
import {UserContext} from '../contexts/user.context'

const DonorInfo = () => {
	const { currentUser } = useContext(UserContext)
	let {state} = useLocation()

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
			fetch('http://localhost:3000/donorinfo', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				donorcode: state.donorcode,
				name: state.name,
				email: currentUser.email
		})
		})
		.then(response => response.json())
		.then(object => setdonorInfo(object))
	},[])

	return(
      <div>
        <div className="Main">
			<div id="Controls">
				<p></p>
		  		<p className="This"> Ministry Partner Information</p>
		  		<p></p>
	  		</div>
			<div>
				<h2>{donorInfo.contactinfo.name}</h2>
				<p>Donor ID:{donorInfo.contactinfo.donorcode}</p>
				<h2>Address</h2>
				<p>{donorInfo.contactinfo.address}</p>
				<p>{donorInfo.contactinfo.city},{donorInfo.contactinfo.state} {donorInfo.contactinfo.postalcode}</p>
				<h2>Email</h2>
				<p>{donorInfo.contactinfo.email}</p>
			</div>
			<div className="Table">
				<table>
					<tbody>
						<tr className="tableHead">
							<td>Date</td>
							<td>Type</td>
							<td>Memo</td>
							<td>Amount</td>
						</tr>
						{donorInfo.donations.map(x=>(
						<tr className="row">
							<td >{x.giftdate}</td>
							<td>{x.paymentmethodcode}</td>
							<td>{x.memo}</td>
							<td>{x.amount}</td>
						</tr>
						))}
					<tr className="tableHead">
					<th colSpan="3">Total ({donorInfo.donations.length} Donations):{}</th>
					</tr>
					</tbody>
				</table>
			</div>	
        </div>
      </div>
	);

}

export default DonorInfo;



