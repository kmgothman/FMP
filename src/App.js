import React, { Component, useState, useContext } from 'react';
import Navigation from './components/navigation/navigation';
import Dash from './components/Dash/Dash';
import Table from './components/Table/Table';
import logo from './logo.svg';
import Welcomepage from './components/welcomepage/welcomepage';
// import login from './components/login/login'
import './App.css';
import ReactDom from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout"
import Layout2 from "./pages/layout2"
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/Dashboard"
import Donations from "./pages/Donations"
import Donors from "./pages/Donors"
import Lapsedgifts from "./pages/Lapsedgifts"
import Locations from "./pages/Locations"
import DonorInfo from "./pages/DonorInfo"
import Uploaddata from "./pages/Uploaddata"
import { UserContext } from "./contexts/user.context"

// const initialState = {
//   input: '',
//   route: 'signin',
//   isSignedIn: false,
//   user: {
//     id: '',
//     name: '',
//     email: '',
//     joined: ''
//   },
//   donorcode: ''
// }



// class App extends Component {
//   constructor() {
//     super();
//     if (localStorage.email) {
//       console.log(localStorage.email)
//       this.state = {
//       isSignedIn: true,
//       user: {
//         id: localStorage.id,
//         name: localStorage.name,
//         email: localStorage.email,
//       }
//     }
//     } else {
//     this.state = initialState;
//     // };
//     } 
//   }


//   loadUser = (data) => {
//     this.setState({
//       isSignedIn: true,
//       user: {
//       id: data.id,
//       name: data.name,
//       email: data.email,
//     }
//     })
//     localStorage.setItem('id', data.id)
//     localStorage.setItem('name', data.name)
//     localStorage.setItem('email', data.email)
//   }

//   onInputeChange = (event) => {
//     this.setState({input: event.target.value});
//   }

//   onRouteChange = (route) => {
//     if (route === 'signout') {
//       this.setState(initialState)
//     } else if (route === 'home') {
//       this.setState({isSignedIn: true})
//     }
//     this.setState({route: route});
//   }

//   loadDonorInfo = (donorcode) => {
//     this.setState({donorcode: donorcode})
//     }

//   signOut = (event) => {
//     localStorage.clear();
//     this.setState(initialState)
//   }

//   render() {
//     const { isSignedIn, route } = this.state;
//     if (userContext) {
//       return(
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout signOut={this.signOut}  />}>
//             <Route index element={<Dashboard />} />
//             <Route path="Donations" element={<Donations loadDonorInfo={this.loadDonorInfo}  />} />
//             <Route path="Donors" element={<Donors loadDonorInfo={this.loadDonorInfo} />} />
//             <Route path="Lapsedgifts" element={<Lapsedgifts loadDonorInfo={this.loadDonorInfo} />} />
//             <Route path="Locations" element={<Locations />} />
//             <Route path="DonorInfo" element={<DonorInfo />} />
//             <Route path="Uploaddata" element={<Uploaddata />} />
//             <Route path="login" element={<Dashboard  />} />
//             <Route path="register" element={<Dashboard  />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//       )} else { return(
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout2 />} />
//            <Route path="login" element={<Login loadUser={this.loadUser}/>} />
//            <Route path="register" element={<Register loadUser={this.loadUser}/>} />
//         </Routes>
//       </BrowserRouter>

//       )}

//   }
// }




  // onInputeChange = (event) => {
  //   this.setState({input: event.target.value});
  // }

  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState(initialState)
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }

  // loadDonorInfo = (donorcode) => {
  //   this.setState({donorcode: donorcode})
  //   }

  // signOut = (event) => {
  //   localStorage.clear();
  //   this.setState(initialState)
  // }
  const App = () => {
    const { currentUser } = useContext(UserContext)

    if ( currentUser) {
      return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard />} />
            <Route path="Donations" element={<Donations />} />
            <Route path="Donors" element={<Donors/>} />
            <Route path="Lapsedgifts" element={<Lapsedgifts  />}/>
            <Route path="Locations" element={<Locations />} />
            <Route path="DonorInfo" element={<DonorInfo />} />
            <Route path="Uploaddata" element={<Uploaddata />} />
            <Route path="login" element={<Dashboard  />} />
            <Route path="register" element={<Dashboard  />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )} else { return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout2 />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      )}

  }

 export default App;
