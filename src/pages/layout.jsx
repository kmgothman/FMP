import React, {useState, useEffect} from 'react';
import {Outlet} from "react-router-dom"
import Navigation from "../components/navigation/navigation"
import MobileNavigation from '../components/navigation/mobile/mobileNavigation';

import { 
  LayoutContainer,
  MobileLayoutContainer,
  MainContainer
 } from './layout.styles';
import Header from '../components/header/header'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentMedia } from '../store/media/media.selector';
import { setCurrentMedia } from '../store/media/media.reducer'

const Layout= () => {
  const dispatch = useDispatch()
  const [menuToggle, setMenuToggle ] = useState(false)
  const reduxCurrentMedia = useSelector(selectCurrentMedia)


  useEffect(()=>{
      const handleResize = () => {
       if (window.innerWidth<1000) {
        dispatch(setCurrentMedia({isMobile:true}))
      } else {
        dispatch(setCurrentMedia({isMobile:false}))
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

    if (reduxCurrentMedia.isMobile) {
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