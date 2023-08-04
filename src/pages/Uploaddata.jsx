import React, {useState} from 'react';
import Drag_drop from '../components/drag-drop/Drag_drop'
import ContactsDragDrop from '../components/drag-drop/ContactsDragDrop';
import {
	MainContainer,
	ContentContainer,
	ContentControlsContainer,
	UploadContainer,
	InstructionsContainer
} from './Uploaddata.styles'

import ExcelTemplate from '../downloads/FMP-Contacts-Template.xlsx'
import {useSelector} from 'react-redux'
import { selectCurrentTheme } from '../store/theme/theme.selector';

const UploadData = () => {
	const currentTheme = useSelector(selectCurrentTheme)
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