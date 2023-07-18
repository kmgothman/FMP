import React, {useState} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import ContactsDragDrop from '../components/Table/ContactsDragDrop';
import {
	MainContainer,
	ContentContainer,
	ContentControlsContainer,
	UploadContainer,
	InstructionsContainer
} from './Uploaddata.styles'

import Header from '../components/header/header'

const UploadData = () => {

	const [pageToggle, setPageToggle] = useState('contacts') //gifts or contacts

	const giftsClick = () => {
		setPageToggle('gifts')
	}

	const contactsClick = () => {
		setPageToggle('contacts')
	}

	return(
		<MainContainer>
			<Header/>
			<ContentContainer>
				<ContentControlsContainer>
					<div>
						<button onClick={giftsClick}>gifts</button><button onClick={contactsClick}>contacts</button>
					</div>
				</ContentControlsContainer>
				<UploadContainer>
					<InstructionsContainer>
						<p>here are a bunch of instruction about how to use this feature. they will be different for each upload option.</p>
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