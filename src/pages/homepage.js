import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Logo from '../components/navigation/Logo/Logo.png'
import { useContext } from 'react';
import { UserContext, setCurrentUser, } from '../contexts/user.context';

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
			<div style={{backgroundImage: 'url("/background.jpg")',
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover"}} className="landing">
        <div className="box-home">
					<div className="box-top"> 
						<img width="100" alt="Logo" src={Logo}/>
					</div>
					<div className="box-bottom">
						<h2>A Webapp for Managing Donations</h2>
						<button onClick={logGoogleUser} className='register'>Log In </button>
						<button onClick={logOutUser} className='register'>sign out </button>
						
						<a>create new account</a>
			
					</div>
				</div>
		</div>
	);

}

export default Homepage;