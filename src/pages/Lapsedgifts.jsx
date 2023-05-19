import React, {Component, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import { UserContext } from '../contexts/user.context';


const Lapsedgift = () => {
	const { currentUser } = useContext(UserContext)

	const [lapsedGifts, setLapsedGifts] = useState([])
	const [missingGiftMonths, setMissingGiftMonths] = useState([])

	useEffect(() => {
		fetch('https://fmp-api.onrender.com/lapsedgift', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			console.log(object)
			setLapsedGifts(object.lapsedDonors)
			setMissingGiftMonths(object.missingGifts)
		})
	}, [])

	if (missingGiftMonths.length > 0) {
		return(
			<div><h1>upload data for {missingGiftMonths[0]}</h1></div>
		)

	} else if (lapsedGifts.length > 0) {
		return(
		<div className="Main">
			<div id="Controls">
					<p></p>
					<p className="This"> Lapsed Gift Report</p>
					<p></p>
				</div>
		<div className="lapsedGiftContent">
			<table>
			
			<tbody>
				<tr className="tableHead">
				<td>Name</td>
				<td>Last Gift</td>
				</tr>

				{lapsedGifts.map(x => (
				<tr className="row">
			<td ><Link >{x.donorname}</Link></td>
			<td>{x.donorsLastMonth}</td>
			</tr>
			))}
				<tr>
				<td>  </td>
				<td>  </td>
				</tr>

			</tbody>
			</table>
		</div>
		</div>
	);} else {
		return(
			<div><h1>Upload Data!</h1></div>
		)
	}

}


export default Lapsedgift;