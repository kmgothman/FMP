import React, {Component, useContext, useState, useEffect} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navigation from "../components/navigation/navigation"
import MobileNavigation from '../components/navigation/mobile/mobileNavigation';
import { useMediaQuery } from 'react-responsive';
import {ReactComponent as MenuIcon} from '../icons/menu.svg'

import { 
  LayoutContainer,
  MobileLayoutContainer,
  MainContainer
 } from './layout.styles';
import { MediaContext } from '../contexts/media.context';
import { ThemeContext } from '../contexts/theme.context';
import Header from '../components/header/header'

const Layout= () => {
  const [menuToggle, setMenuToggle ] = useState(false)
  const {currentTheme}= useContext(ThemeContext)
  const {currentMedia, setCurrentMedia} = useContext(MediaContext)

  useEffect(()=>{
      const handleResize = () => {
       if (window.innerWidth<1000) {
        setCurrentMedia({isMobile:true})
      } else {
        setCurrentMedia({isMobile:false})
      }
      }
      
      window.addEventListener('resize', handleResize);
      
      return () => {
       window.removeEventListener('resize', handleResize);
      };
    
  },[])

  const menuClick = () => {
    setMenuToggle(!menuToggle)
  }

    if (currentMedia.isMobile) {
    return(
        <MobileLayoutContainer>
          
          {menuToggle ? (
            <MobileNavigation menuClick={menuClick}/>
            ): (<div>
              <Header menuClick={menuClick}/>
            <Outlet/>
            </div>
          )}
        </MobileLayoutContainer>
    );
  } else {
    return(
        <LayoutContainer>
          <Navigation  />
          <MainContainer>
            <Header />
            <Outlet />
          </MainContainer>
        </LayoutContainer>
    )
  }
  
}

export default Layout;