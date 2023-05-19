import React, {Component, useState, useContext, useEffect } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {CanvasJSChart} from 'canvasjs-react-charts';
import { UserContext } from '../contexts/user.context';


const Locations = () => {
	const { currentUser } = useContext(UserContext)

	const [stateNames, setStateNames] = useState([])
	const [statesObject, setStatesObject] = useState([])

	useEffect(() => {
		fetch('https://fmp-api.onrender.com/locations', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: currentUser.email
		})
		})
		.then((response) => response.json())
		.then((object) => {
			console.log(object)
			setStatesObject(object)
			setStateNames(Object.keys(object))
		})
	}, [])

	let dataPoints = []
			let x=10
			stateNames.map((stateName)=>{
				let amount = Math.round(statesObject[stateName])
				dataPoints.push({
					x:x,
					label: stateName,
					y:amount,
					indexLabel: '$'+String(amount)
					}
				)
				x = x+10
			}
			)

      const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Donations by State"
			},
			axisY: {
				includeZero: true
			},
			axisX: {
				interval:10,
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: dataPoints
			}]
		}
		return (
			<div>
				<CanvasJSChart options = {options} 
					/* onRef={ref => this.chart = ref} */
					/* containerProps={{ width: '100%', height: '300px' }} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
	 
			</div>
			);
}


export default Locations;