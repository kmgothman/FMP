import React,{Component, useContext, useState, useEffect} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Drag_drop from '../components/Table/Drag_drop'
import Table from '../components/Table/Table'
import {UserContext} from '../contexts/user.context'

const Dashboard = () => {

	const { currentUser } = useContext(UserContext)

	const [dashboardData, setDashboardData] = useState({
		donationMonths: [],
		totalDonors: null,
		totalDonations: null,
		monthlyAverage: null,
		averageDonation: null
	})

	useEffect(() => {
		fetch('https://fmp-api.onrender.com/dashboard', {
    	method: 'post',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({
      	email: currentUser.email
    })
  })
    .then((response) => response.json())
    .then((object) => {
		console.log(currentUser)
		setDashboardData(object)
	})
		
	}, [])


	return(
      
        <div className="Main">
        	<div id="Controls">
		        <p className="Prev">User: {currentUser.email}</p>
		        <p> </p>
						<p className="This">Total Donations: ${dashboardData.totalDonations}</p>
						
					</div>
					<div className="dashboardBody">
						<div className="dashboardCard">
							<div className="cardTop">
								<p>Total Mission Partners </p>
							</div>
							<div className="cardBottom">
								<p>{dashboardData.totalDonors}</p>
							</div>
						</div>
						<div className="dashboardCard">
							<div className="cardTop">
							<p>Average Monthly Gift</p>
							</div>
							<div className="cardBottom">
							<p>${dashboardData.averageDonation}</p>
							</div>
						</div>
						<div className="dashboardCard">
							<div className="cardTop">
								<p>Average Monthly Gifts</p>
							</div>
							<div className="cardBottom">
							${dashboardData.monthlyAverage}
							</div>
						</div>
						<div className="dashboardCard">
							<div className="cardTop">
								<p>Donations Uploaded</p>
							</div>
							<div className="cardBottomMonths">
							 {dashboardData.donationMonths.map((month)=>{
								return(
								<p key={month}>{month}</p>)
							 })}
							</div>
						</div>
					</div>
        </div>
      
	);
}


export default Dashboard;