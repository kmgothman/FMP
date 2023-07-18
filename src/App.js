import React, { useContext } from 'react';
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
import { UserContext } from "./contexts/user.context"
import NewDonor from './pages/NewDonor';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/theme.context';



  const App = () => {
    const { currentUser } = useContext(UserContext)
    const { currentTheme} = useContext(ThemeContext)
    const theme = {
      main: 'black'
    }

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
            <Route path="NewDonor" element={<NewDonor />} />
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
      )} else { return(
      <RouterProvider router={routerLoggedOut} />

      )}

  }

 export default App;
