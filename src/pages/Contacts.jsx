import React, {  useEffect, useState} from 'react';
import { Link} from "react-router-dom"

import { 
	MainContainer,
	ContactsContainer,
	TableContainer,
	ContactsControlsContainer,
	SearchContainer,
	FilterContainer
 } from './contacts.styles';

import {ReactComponent as FilterIcon} from '../icons/filter.svg'
import {ReactComponent as SearchIcon} from '../icons/search.svg'
import Loading from '../icons/loading.gif'

import { selectCurrentTheme } from '../store/theme/theme.selector';
import { selectCurrentUser } from '../store/user/user.selecter';
import { useSelector } from 'react-redux'


const Contacts = () => {		
	const currentUser = useSelector(selectCurrentUser)
	const currentTheme = useSelector(selectCurrentTheme)

	const [contacts, setContacts] = useState([])
	const [filteredContactNames, setFilteredContactNames] = useState([])
	const [contactNames, setContactNames] = useState([])
	const [loading, setLoading] = useState(false)
	const [filterToggle, setFilterToggle] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://fmp-api.onrender.com/contacts', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			setContacts(object)
			setContactNames(Object.keys(object))
			setFilteredContactNames(Object.keys(object))
			
			setLoading(false)
		})
	}, [])

	const handleDonorsFilterClick = () => {
		let array = []
		contactNames.map((name)=>{
			if (contacts[name].donorcode) {
				array.push(name)
			}
			
		})
		
		setFilteredContactNames(array)
	}

	const handleAllContactsClick = () => {
		setFilteredContactNames(contactNames)
	}

	const handleStatesClick = () => {
		let namesArray = contactNames
		namesArray.map((name)=>{
			if (!contacts[name].state) {
				let index=namesArray.indexOf(name)
				delete namesArray[index]
			}
		})
		namesArray.sort(function(a, b) {
			var x = contacts[a].state;
			var y = contacts[b].state;
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		})
		setFilteredContactNames(namesArray)
	}

	const handleSearch = (value) => {
		let input = value.toLowerCase()
		let namesArray = contactNames
		setFilteredContactNames(namesArray.filter((el)=>{
			if (el) {
				if (el === '') {
					return el
				} else {
					
					return el.toLowerCase().includes(input)
				}
			} 
		}))
	}

	const handleCitiesClick = () => {
		let namesArray = contactNames
		namesArray.map((name)=>{
			if (!contacts[name].city) {
				let index=namesArray.indexOf(name)
				delete namesArray[index]
			}
		})

		namesArray.sort(function(a, b) {
			var x = contacts[a].city;
			x.toUpperCase()
			var y = contacts[b].city;
			x.toUpperCase()
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		})
		setFilteredContactNames(namesArray)

	}

	const filterClick = () => {
		setFilterToggle(!filterToggle)
	}

	return(
		<div>
		{contactNames.length ? (
		<MainContainer>
			<ContactsContainer>
				<ContactsControlsContainer>
					<div><FilterIcon onClick={filterClick} width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third}/></div>
					{filterToggle ? (
						<FilterContainer >
							<button onClick={handleAllContactsClick}>All Contacts</button>
							<button onClick={handleDonorsFilterClick}>Donors</button>
							<button onClick={handleCitiesClick}>City</button>
							<button onClick={handleStatesClick}>State</button>
						</FilterContainer>
					) : (<></>) }
					<SearchContainer><SearchIcon width='25' height='25' fill={currentTheme.seventh} stroke={currentTheme.seventh}/><input type="text" placeholder="search contacts" onChange={event => handleSearch(event.target.value)}/></SearchContainer>
				</ContactsControlsContainer>
			<TableContainer>
				<table>
					<tr >
						<td>Donor Code</td>
						<td>Name</td>
						<td>Address</td>
						<td>city</td>
						<td>State</td>
						<td>Postal Code</td>
						<td>Email</td>
						<td>Phone</td>
					</tr>
					{filteredContactNames.map((name) => { 
						let contact = contacts[name]
						return(
					<tr >
						<td >{contact.donorcode}</td>
						<td ><Link to="/DonorInfo" state={{'name':contact.name, 'donorcode':contact.donorcode}}>{contact.name}</Link></td>
						<td>{contact.address}</td>
						<td>{contact.city}</td>
						<td>{contact.state}</td>
						<td>{contact.postalcode}</td>
						<td>{contact.email}</td>
						<td>{contact.phone}</td>
						</tr>)
					})}
				</table>
			</TableContainer>
		</ContactsContainer>
		</MainContainer>
		) : (
			<MainContainer>
			<ContactsContainer>
				<ContactsControlsContainer>
					<div><FilterIcon onClick={filterClick} width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third}/></div>
					{filterToggle ? (
						<FilterContainer >
							<button onClick={handleAllContactsClick}>All Contacts</button>
							<button onClick={handleDonorsFilterClick}>Donors</button>
							<button onClick={handleCitiesClick}>City</button>
							<button onClick={handleStatesClick}>State</button>
						</FilterContainer>
					) : (<></>) }
					<SearchContainer><SearchIcon width='25' height='25' fill={currentTheme.seventh} stroke={currentTheme.seventh}/><input type="text" placeholder="search contacts" onChange={event => handleSearch(event.target.value)}/></SearchContainer>
				</ContactsControlsContainer>
			<TableContainer>
				{loading ? (<img src={Loading} alt='loading...' width='70px' height='70px'/>) : (<h1>upload data to see contacts</h1>)}
			</TableContainer>
		</ContactsContainer>
		</MainContainer>
		)}
		</div>
	);
}

export default Contacts;