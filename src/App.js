import React, {  useEffect } from 'react';
import { onAuthStateChangedListener
 } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.reducer'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import {  
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from "react-router-dom"
import Layout from "./pages/layout"
import Layout2 from "./pages/layout2"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/Dashboard"
import Donations from "./pages/Donations"
import Contacts from "./pages/Contacts"
import Lapsedgifts from "./pages/Lapsedgifts"
import Locations from "./pages/Locations"
import DonorInfo from "./pages/DonorInfo"
import Uploaddata from "./pages/Uploaddata"
import Tasks from "./pages/Tasks"
import History from "./pages/History"
import { ThemeProvider } from 'styled-components';
import { selectCurrentTheme } from './store/theme/theme.selector';
import { selectCurrentUser } from './store/user/user.selecter'


//df
  const App = () => {
    const currentTheme = useSelector(selectCurrentTheme)
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
 

    useEffect(()=>{
      const unsubscribe = onAuthStateChangedListener((user)=>{
          
          dispatch(setCurrentUser(user))
          if (user) {
          //createUserDocumentFromAuth(user)
          }
      })
      return unsubscribe
  },[])

    const routerLoggedIn = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard />} />
            <Route path="Donations" element={<Donations />} />
            <Route path="Contacts" element={<Contacts/>} />
            <Route path="Lapsedgifts" element={<Lapsedgifts  />}/>
            <Route path="Locations" element={<Locations />} />
            <Route path="DonorInfo" element={<DonorInfo />} />
            <Route path="Uploaddata" element={<Uploaddata />} />
            <Route path="History" element={<History />} />
            <Route path="login" element={<Dashboard  />} />
            <Route path="register" element={<Dashboard  />} />
            <Route path="Tasks" element={<Tasks />} />
          </Route>
      )
    )

    const routerLoggedOut = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout2 />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
      )
    )

    if ( currentUser) {
      return(
        <ThemeProvider theme={currentTheme} >
        <RouterProvider router={routerLoggedIn} />
        </ThemeProvider>
      )} else { 
        return(
      <RouterProvider router={routerLoggedOut} />

      )}

  }

 export default App;
