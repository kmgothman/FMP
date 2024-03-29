import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import Loading from '../icons/loading.gif'
import {useSelector} from 'react-redux'
import { selectCurrentUser } from '../store/user/user.selecter';

import {
	MainContainer,
	ContactsContainer,
	ContactsControlsContainer,
	TableContainer,
} from './Lapsedgifts.styles'


const Lapsedgift = () => {
	const currentUser = useSelector(selectCurrentUser)

	const [lapsedGifts, setLapsedGifts] = useState([])
	const [missingGiftMonths, setMissingGiftMonths] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://fmp-api.onrender.com/lapsedgift', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			
			setLapsedGifts(object.lapsedDonors)
			setMissingGiftMonths(object.missingGifts)
			setLoading(false)
		})
	}, [])
	if (loading) {
		return(
			<MainContainer>
			<ContactsContainer>
				<ContactsControlsContainer>
					<h1>Lapsed Gifts</h1>
				</ContactsControlsContainer>
			<TableContainer>
			<div><img src={Loading} alt='loading...' width='70px' height='70px'/></div>
			</TableContainer>
		</ContactsContainer>
		</MainContainer>
			
		)

	} else if (missingGiftMonths.length > 0) {
		return(
			<MainContainer>
			<ContactsContainer>
				<ContactsControlsContainer>
					<h1>Lapsed Gifts</h1>
				</ContactsControlsContainer>
			<TableContainer>
			<div><h1>upload data for {missingGiftMonths[0]} to use this report.</h1></div>
			</TableContainer>
		</ContactsContainer>
		</MainContainer>
			
		)

	} else if (lapsedGifts.length > 0) {
		return(
			<MainContainer>
				<ContactsContainer>
					<ContactsControlsContainer>
					<h1>Lapsed Gifts</h1>
					</ContactsControlsContainer>
					<TableContainer>
						<table>
						<tbody>
						<tr className="tableHead">
						<td>Name</td>
						<td>Last Gift</td>
						</tr>

						{lapsedGifts.map(contact => (
						<tr className="row">
							<td ><Link to="/DonorInfo" state={{'name':contact.name, 'donorcode':contact.donorcode}}>{contact.name}</Link></td>
							<td>{contact.donorsLastMonth}</td>
						</tr>
						))}
						<tr>
						<td>  </td>
						<td>  </td>
						</tr>

					</tbody>
					</table>
					</TableContainer>
			</ContactsContainer>
		</MainContainer>
	);} else {
		return(
			<MainContainer>
			<ContactsContainer>
				<ContactsControlsContainer>
					<h1>Lapsed Gifts</h1>
				</ContactsControlsContainer>
			<TableContainer>
			 <h1>Upload Data!</h1>
			</TableContainer>
		</ContactsContainer>
		</MainContainer>
		)
	}

}


export default Lapsedgift;