import React, {Component , useContext, useState, useEffect } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'
import {UserContext} from '../contexts/user.context'


const Donations = () => {		
	const { currentUser } = useContext(UserContext)

	const [donations, setDonations] = useState([])
	const [monthIndex, setMonthIndex] = useState(0)
	const [monthNames, setMonthNames] = useState([])
	const [donationSums, setDonationSums] = useState([])

	useEffect(() => {
		fetch('https://fmp-api.onrender.com/donations', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			console.log(object)
			setDonations(object.donations)
			setMonthIndex(object.monthNames.length-1)
			setMonthNames(object.monthNames)
			setDonationSums(object.donationSums)
		})
	}, [])

	const handlePrevClick=() => {
		let current = monthIndex
		if (current === 0) {

		} else {
			let newIndex = current-1
			setMonthIndex(newIndex)
			
		}
	}

	const handleNextClick=() => {
		let current = monthIndex
		let max = monthNames.length
		if (current === max) {

		} else {
			let newIndex = current+1
			setMonthIndex(newIndex)
		}
	}

	const handleDonorClick = (donorcode, event) => {
    // this.props.loadDonorInfo(donorcode)
	}
	
	if (monthNames.length) {
	return(
	
	<div className="Main">
	 	<div id="Controls">
			<a className="Prev" onClick={handlePrevClick}>Previous Month</a>
			<p className="This">{monthNames[monthIndex]}</p>
			<a className="Next" onClick={handleNextClick}>Next Month</a>
	 	</div>
		 <div className="Table">
	 	<table>
	 	<thead>
	 	<tr>
			
	 		</tr>
	 	</thead>
	 	<tbody>
	 		<tr className="tableHead">
	 			<td>Name</td>
	 			<td>Donor Code</td>
	 			<td>Gift Amount</td>
	 			<td>Date</td>
				<td>Memo</td>
	 		</tr>
			

	 		{donations[monthNames[monthIndex]].map(x => (
			<tr className="row" key={x.code}>
				<td ><Link to="/DonorInfo">{x.donorname}</Link></td>
				<td>{x.donorcode}</td>
				<td>{x.amount}</td>
				<td>{x.giftdate}</td>
				<td>{x.memo}</td>
			</tr>
		))}
			<tr>
			<th className="tableHead" colSpan="5">Total ({donations[monthNames[monthIndex]].length} Donations): {donationSums[monthIndex]}</th>
			
			</tr>
		</tbody>
		</table>
		
	</div>
	</div>
	)
	} else {
		return(
			<div><h1>donations</h1></div>
		)
	}
	
}


export default Donations;