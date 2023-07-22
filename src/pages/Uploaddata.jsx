import React, {useState, useContext} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import ContactsDragDrop from '../components/Table/ContactsDragDrop';
import {ThemeContext} from '../contexts/theme.context'
import {
	MainContainer,
	ContentContainer,
	ContentControlsContainer,
	UploadContainer,
	InstructionsContainer
} from './Uploaddata.styles'

import Header from '../components/header/header'
import ExcelTemplate from '../downloads/FMP-Contacts-Template.xlsx'

const UploadData = () => {
	const {currentTheme} = useContext(ThemeContext)
	const [pageToggle, setPageToggle] = useState('donations') //gifts or contacts

	const giftsClick = () => {
		setPageToggle('donations')
	}

	const contactsClick = () => {
		setPageToggle('contacts')
	}

	const donationInstructions = "To upload your donations log into TNT and download the CSV file for each month. Then individually upload each CSV onto this page."
	const contactsInstructions = "To upload contacts, download the Excel sheet template and fill in you contact information. Then save as a CSV and upload it here."

	return(
		<MainContainer>
			<Header/>
			<ContentContainer>
				<ContentControlsContainer>
					<div>
						<button style={pageToggle === 'contacts' ? ({background:'none'}) : ({color: currentTheme.eighth, 'border-bottom': 'solid 2px' })} onClick={giftsClick}>Donations</button>
						<button style={pageToggle === 'contacts' ? ({color: currentTheme.eighth, 'border-bottom': 'solid 2px' }) : ({background: 'none'})} onClick={contactsClick}>Contacts</button>
					</div>
				</ContentControlsContainer>
				<UploadContainer>
					<InstructionsContainer>
						{pageToggle === 'contacts' ? (
							<div>
								<a href={ExcelTemplate} download>Click to download</a>
								<p>{contactsInstructions}</p>
							</div>
						):(
							<p>{donationInstructions}</p>
						)}
						
					</InstructionsContainer>
					<div>
						{pageToggle === 'contacts' ? <ContactsDragDrop/> : <Drag_drop/>}
					</div>
				</UploadContainer>
			</ContentContainer>
		</MainContainer>
	);
}

export default UploadData;