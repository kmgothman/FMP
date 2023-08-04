import React, {useEffect} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Logo from '../components/navigation/Logo/Logo.png'

import {
	ButtonsContainer,
	ContentContainer,
	HomePageContainer,
	ImageContainer,
	MobileContainer,
	MobileImgDiv,
	MobileButtonsContainer
} from './homepage.styles'

import { auth, provider, createUserDocumentFromAuth, myVariable, signOutUser } from '../utils/firebase/firebase.utils'
import { getAuth, getRedirectResult, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentMedia } from '../store/media/media.selector';
import { setCurrentMedia } from '../store/media/media.reducer'

const Homepage = () => {

	const currentMedia = useSelector(selectCurrentMedia)
	const dispatch=useDispatch()

	useEffect(()=>{
		const handleResize = () => {
		 if (window.innerWidth<1000) {
		  console.log('mobile fire')
		  dispatch(setCurrentMedia({isMobile:true}))
		} else {
		  console.log('desktop fire')
		  dispatch(setCurrentMedia({isMobile:false}))
		}
		}
		
		window.addEventListener('resize', handleResize);
		
		return () => {
		 window.removeEventListener('resize', handleResize);
		};
	  
	},[])

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

	if (currentMedia.isMobile) {
		return (
			<MobileContainer>
				<MobileImgDiv>
					<img width="150" alt="Logo" src={Logo}/>
				</MobileImgDiv>
				<h1>Maximize Your Fundraising Efforts</h1>
				<h3>FMP is a web app design to increase productivity and improve your Mission Partner Development. Manage contacts and analyze data to help you on your fundraising journey.</h3>

				<MobileButtonsContainer>
					<button onClick={logGoogleUser}>Get Started </button>
					<a href="https://fmp-demo.onrender.com" style={{background: '#3793de', color: 'white'}}>Try Demo </a>
				</MobileButtonsContainer>
			</MobileContainer>
		)
	}
	else {
	return(
			<HomePageContainer >
        		<ContentContainer>

					<h1>Maximize Your Fundraising Efforts</h1>
					<h3>FMP is a web app design to increase productivity and improve your Mission Partner Development. Manage contacts and analyze data to help you on your fundraising journey.</h3>
					<ButtonsContainer>
					<button onClick={logGoogleUser}>Get Started </button>
					<a href="https://fmp-demo.onrender.com" style={{background: '#3793de', color: 'white'}}>Try Demo </a>
					</ButtonsContainer>
				</ContentContainer>
				<ImageContainer>
				<img width="250" alt="Logo" src={Logo}/>
				</ImageContainer>
		</HomePageContainer>
	);
	}

}

export default Homepage;

// style={{backgroundImage: 'url("/background.jpg")',
// 			backgroundRepeat: "no-repeat",
// 			backgroundSize: "cover"}}