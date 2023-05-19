import React, {Component, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'
import {UserContext} from '../contexts/user.context'


const Donors = () => {		
	const { currentUser } = useContext(UserContext)

	const [donors, setDonors] = useState([])
	const [donorCodes, setDonorCodes] = useState([])

	useEffect(() => {
		fetch('https://fmp-api.onrender.com/donors', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			console.log(object)
			setDonors(object)
			setDonorCodes(Object.keys(object))
		})
	}, [])

	// const handleDonorClick=(donorcode, event) => {
	// 	this.props.loadDonorInfo(donorcode)
	// 	}

	return(
		<div>
		<div className="Main">
			<div id="Controls">
			<p></p>
				<p className="This">Mission Partners</p>
				<p></p>
			</div>
			<div className="Table">
			<table>
			<tbody>
				<tr className="tableHead">
					<td>Donor Code</td>
					<td>Name</td>
					<td>Address</td>
					<td>city</td>
					<td>State</td>
					<td>Postal Code</td>
					<td>Email</td>
					<td>Phone</td>
				</tr>
				{donorCodes.map((donorCode) => { 
					let donor = donors[donorCode]
					return(
				<tr className="row">
					<td >{donor.donorcode}</td>
					<td ><Link>{donor.name}</Link></td>
					<td>{donor.address}</td>
					<td>{donor.city}</td>
					<td>{donor.state}</td>
					<td>{donor.postalcode}</td>
					<td>{donor.email}</td>
					<td>{donor.phone}</td>
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
export default Donors;