import React, { useContext, useState, useEffect } from 'react';
import { Link} from "react-router-dom"
import {UserContext} from '../contexts/user.context'
import { ThemeContext } from '../contexts/theme.context';
import {
	MainContainer,
	DonationsContainer,
	DonationsControlsContainer,
	TableContainer,
	ControlDiv
} from './donations.styles'
import Header from '../components/header/header'
import Loading from '../icons/loading.gif'
import SettingsIcon from '../icons/settings.svg'
import {ReactComponent as LeftIcon} from '../icons/left.svg'
import {ReactComponent as RightIcon} from '../icons/right.svg'


const Donations = () => {		
	const { currentUser } = useContext(UserContext)
	const { currentTheme } = useContext(ThemeContext)

	const [donations, setDonations] = useState([])
	const [monthIndex, setMonthIndex] = useState(0)
	const [monthNames, setMonthNames] = useState([])
	const [donationSums, setDonationSums] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://fmp-api.onrender.com/donations', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json()
		)
		.then((object) => {
			
			setDonations(object.donations)
			setMonthIndex(object.monthNames.length-1)
			setMonthNames(object.monthNames)
			setDonationSums(object.donationSums)
			setLoading(false)
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
		if (current === max-1) {

		} else {
			let newIndex = current+1
			setMonthIndex(newIndex)
		}
	}
	
	return(
		<div>
			{monthNames.length ? (
	<MainContainer>
		<DonationsContainer>
			<DonationsControlsContainer>
				<ControlDiv><LeftIcon width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third}/><a className="Prev" onClick={handlePrevClick}>Previous Month</a></ControlDiv>
				<p className="This">{monthNames[monthIndex]}</p>
				<ControlDiv><a className="Next" onClick={handleNextClick}>Next Month</a><RightIcon width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third}></RightIcon></ControlDiv>
			</DonationsControlsContainer>
			<TableContainer>
				<table>
				<tr >
					<th>Name</th>
					<th>Donor Code</th>
					<th>Gift Amount</th>
					<th>Date</th>
					<th>Memo</th>
				</tr>
				{donations[monthNames[monthIndex]].map(x => (
				<tr key={x.code}>
					<td ><Link to="/DonorInfo" state={{'name':x.donorname, 'donorcode':x.donorcode}}>{x.donorname}</Link></td>
					<td>{x.donorcode}</td>
					<td>{x.amount}</td>
					<td>{x.giftdate}</td>
					<td>{x.memo}</td>
				</tr>
				))}
				<tr>
				<th className="tableHead" colSpan="5">Total ({donations[monthNames[monthIndex]].length} Donations): {donationSums[monthIndex]}</th>
				</tr>
				</table>
				
			</TableContainer>
		</DonationsContainer>
	</MainContainer>
	) : (
			<MainContainer>
				<DonationsContainer>
					<DonationsControlsContainer>
						<ControlDiv><LeftIcon width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third}/><a className="Prev" onClick={handlePrevClick}>Previous Month</a></ControlDiv>
						<p className="This">{monthNames[monthIndex]}</p>
						<ControlDiv><a className="Next" onClick={handleNextClick}>Next Month</a><RightIcon width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third}/></ControlDiv>
					</DonationsControlsContainer>
					<TableContainer>
						{loading ? (<img src={Loading} alt='loading...' width='70px' height='70px'/>) : (<h1>upload data to see donations</h1>)}
						
						
					</TableContainer>
				</DonationsContainer>
			</MainContainer>
	)}
	</div>
	)
	
}


export default Donations;