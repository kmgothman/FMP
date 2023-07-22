import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Logo from '../components/navigation/Logo/Logo.png'
import { useContext } from 'react';
import { UserContext, setCurrentUser, } from '../contexts/user.context';
import { ThemeContext } from '../contexts/theme.context'
import {
	ButtonsContainer,
	ContentContainer,
	HomePageContainer,
	ImageContainer
} from './homepage.styles'

import { auth, provider, createUserDocumentFromAuth, myVariable, signOutUser } from '../utils/firebase/firebase.utils'
import { getAuth, getRedirectResult, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Homepage = () => {

	const { setCurrentUser } = useContext(UserContext);
	const { currentUser } = useContext(UserContext)

    const logGoogleUser = (event) => {
		
    	signInWithPopup(auth, provider)
        	.then(({user}) => { 
                
				//setCurrentUser(user)
                //const userDocRef = createUserDocumentFromAuth(user) 
            })
        }

	const logOutUser = () => {
		signOutUser()
		//setCurrentUser(null)
	}


	return(
			<HomePageContainer >
        		<ContentContainer>

					<h1>Maximize Your Fundraising Efforts</h1>
					<h3>FMP is a web app design to increase productivity and improve your Mission Partner Development. Manage contacts and analyze data to help you on your fundraising journey.</h3>
					<ButtonsContainer>
					<button onClick={logGoogleUser}>Get Started </button>
					<button style={{background: '#3793de', color: 'white'}}>Try Demo </button>
					</ButtonsContainer>
				</ContentContainer>
				<ImageContainer>
				<img width="250" alt="Logo" src={Logo}/>
				</ImageContainer>
		</HomePageContainer>
	);

}

export default Homepage;

// style={{backgroundImage: 'url("/background.jpg")',
// 			backgroundRepeat: "no-repeat",
// 			backgroundSize: "cover"}}