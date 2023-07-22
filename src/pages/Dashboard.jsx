import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {UserContext} from '../contexts/user.context'
import {ThemeContext} from '../contexts/theme.context'
import Header from '../components/header/header'
import {
	MainContainer,
	ContentContainer,
	ContentHeadContainer,
	DataContainer,
	DataCard,
	DonationStatContainer,
	MPDStatContainer,
	ChartContainer
} from './Dashboard.styles'
import Loading from '../icons/loading.gif'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const Dashboard = () => {

	const { currentUser } = useContext(UserContext)
	const { currentTheme } = useContext(ThemeContext)
	const [ data, setData ] = useState([])
	const [loading , setLoading ] = useState(false)

	const [dashboardData, setDashboardData] = useState({
		donationMonths: [],
		totalDonors: null,
		donationStats: {
			totalDonations: 0,
			monthlyTotals: {

			}
		},
		monthlyAverage: null,
		averageDonation: null,
		historyObject: {
			appointments: 0,
			calls: 0,
			emails: 0,
			newsletters: 0,
			thank: 0
		},
		incompleteTasks: 0
	})


	useEffect(() => {
		setLoading(true)
		fetch('https://fmp-api.onrender.com/dashboard', {
    	method: 'post',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({
      	email: currentUser.email
    })
  })
    .then((response) => response.json())
    .then((object) => {
		
		setDashboardData(object)
		let data = []
		let monthNames = object.donationMonths
		monthNames.map((monthName) => {
			let dataPoint = {
				name: monthName,
				monthly : object.donationStats.monthlyTotals[monthName].Monthlys,
				onetime : object.donationStats.monthlyTotals[monthName].oneTimes-object.donationStats.monthlyTotals[monthName].Monthlys,
				amt : 0
			}
			data.push(dataPoint)
		})
		setData(data)
		setLoading(false)
	})
		
	}, [])





	return(
		
        <MainContainer>
			<Header/>
			<ContentContainer>
        		<ContentHeadContainer>
					<div>
						<h1>{currentUser.displayName}</h1>
						<h5>{currentUser.email}</h5>
					</div>
				</ContentHeadContainer>
				{/* tile area - display name
				mpd progress - history object
				data uploaded -mpd months
				donation data - dnors and averages
				 */}
				 <DataContainer>
					<DonationStatContainer>
						
						<ChartContainer>
							
							<h3>Donations</h3>
							{loading ? (<img src={Loading} alt='loading...' width='70px' height='70px'/>) : (
							<ResponsiveContainer width='100%' height={300}>
							<LineChart
								
								data={data}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
								>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="monthly" stroke={currentTheme.eighth} activeDot={{ r: 8 }} />
								<Line type="monotone" dataKey="onetime" stroke={currentTheme.second} />
							</LineChart>
							</ResponsiveContainer>
							)}
						</ChartContainer>
					</DonationStatContainer>
					<MPDStatContainer>
					<DataCard>
						<h3>Donation Stats</h3>
						<p>Total Donors </p>
						<h4>{dashboardData.totalDonors}</h4>
						<p>Monthly Average Gifts </p>
						<h4>{dashboardData.monthlyAverage}</h4>
						<p>Average Donation </p>
						<h4>{dashboardData.averageDonation}</h4>
						<p>Total Donations </p>
						<h4>{dashboardData.donationStats.totalDonations}</h4>
						</DataCard>
					<DataCard>
						
						<h3>MPD Progress</h3>
						<p>Appointments </p>
						<h4>{dashboardData.historyObject.appointments}</h4>
						<p>Calls Made </p>
						<h4>{dashboardData.historyObject.calls}</h4>
						<p>Emails Sent </p>
						<h4>{dashboardData.historyObject.emails}</h4>
						<p>Newsletters Sent </p>
						<h4>{dashboardData.historyObject.newsletters}</h4>
						<p>Thank You's Sent </p>
						<h4>{dashboardData.historyObject.thank}</h4>
						</DataCard>
						<DataCard>
							<h3>Data Uploaded</h3>
							{dashboardData.donationMonths.map((month)=>{
							return(
							<h4 key={month}>{month}</h4>)
							})}
					</DataCard>

					</MPDStatContainer>
					</DataContainer>
			</ContentContainer>
        </MainContainer>
		
      
	);
}


export default Dashboard;