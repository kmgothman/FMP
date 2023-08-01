import React, {useState, useContext} from 'react';
import {
	NavigationContainer, 
	LogoContainer, 
	SideBarContainer, 
	DropBoxContainer,
	StyledLink,
	LinkContainer
} from './mobileNavigation.styles'
// import './navigation.css';
import { useLocation} from "react-router-dom"
import { ThemeContext } from '../../../contexts/theme.context';
import { MediaContext} from '../../../contexts/media.context'
import {ReactComponent as ContactIcon} from '../../../icons/contacts.svg'
import {ReactComponent as DonationsIcon} from '../../../icons/donations.svg'
import {ReactComponent as HistoryIcon} from '../../../icons/history.svg'
import {ReactComponent as TasksIcon} from '../../../icons/tasks.svg'
import {ReactComponent as ReportsIcon} from '../../../icons/reports.svg'
import {ReactComponent as UploadIcon} from '../../../icons/upload.svg'
import {ReactComponent as DashboardIcon} from '../../../icons/dashboard.svg'
import {ReactComponent as SignOutIcon} from '../../../icons/signout.svg'
import {ReactComponent as DownIcon} from '../../../icons/down.svg'
import {ReactComponent as LeftIcon} from '../../../icons/left.svg'
import {ReactComponent as LocationIcon} from '../../../icons/location.svg'
import {ReactComponent as LapsedIcon} from '../../../icons/lapsed.svg'
import {ReactComponent as MenuIcon } from '../../../icons/menu.svg'


const MobileNavigation = (props) => {

const location = useLocation()
const nav = location.pathname
const [reportsToggle, setReportsToggle] = useState(0)
const {currentTheme } = useContext(ThemeContext)
const {currentMedia} = useContext(MediaContext)

const reportsClick=() => {
	if (reportsToggle) {
		setReportsToggle(0)
	} else {
		setReportsToggle(1)
	}
}

// const logOutUser = () => {
// 	signOutUser()
// }



	if (reportsToggle) {
	return(
		
		<NavigationContainer>
			<div><MenuIcon onClick={props.menuClick} width='30' height='30' fill={currentTheme.third}/></div>
			<SideBarContainer className={currentTheme.mode}>
				<LinkContainer className={nav == '/' ? 'selected':'unselected'}><DashboardIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/">Dashboard</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/Donations' ? 'selected':'unselected'}><DonationsIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Donations">Donations</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/Contacts' ? 'selected':'unselected'}><ContactIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Contacts">Contacts</StyledLink></LinkContainer>
				<LinkContainer><ReportsIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={reportsClick}>Reports</StyledLink><DownIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/></LinkContainer>
						<DropBoxContainer className={nav == '/Lapsedgifts' ? 'selected':'unselected'}><LapsedIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Lapsedgifts">Lapsed Gifts</StyledLink></DropBoxContainer>
						<DropBoxContainer className={nav == '/Locations' ? 'selected':'unselected'}><LocationIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Locations">Gifts by Location</StyledLink></DropBoxContainer>
				<LinkContainer className={nav == '/Uploaddata' ? 'selected':'unselected'}><UploadIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Uploaddata">Upload Data</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/Tasks' ? 'selected':'unselected'}><TasksIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Tasks">Tasks</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/History' ? 'selected':'unselected'}><HistoryIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick} to="/History">History</StyledLink></LinkContainer>
				
			</SideBarContainer>
		</NavigationContainer>
	);} else {
		return (
		<NavigationContainer>
			<div><MenuIcon onClick={props.menuClick} width='30' height='30' fill={currentTheme.third}/></div>
			<SideBarContainer className={currentTheme.mode}>
				<LinkContainer className={nav == '/' ? 'selected':'unselected'}><DashboardIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick} to="/">Dashboard</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/Donations' ? 'selected':'unselected'}><DonationsIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Donations">Donations</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/Contacts' ? 'selected':'unselected'}><ContactIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Contacts">Contacts</StyledLink></LinkContainer>
				<LinkContainer><ReportsIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={reportsClick}>Reports</StyledLink><LeftIcon onClick={props.menuClick}  width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/></LinkContainer>
				<LinkContainer className={nav == '/Uploaddata' ? 'selected':'unselected'}><UploadIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick}  to="/Uploaddata">Upload Data</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/Tasks' ? 'selected':'unselected'}><TasksIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick} to="/Tasks">Tasks</StyledLink></LinkContainer>
				<LinkContainer className={nav == '/History' ? 'selected':'unselected'}><HistoryIcon width='35' height='35' fill={currentTheme.third} stroke={currentTheme.third}/><StyledLink onClick={props.menuClick} to="/History">History</StyledLink></LinkContainer>
				
			</SideBarContainer>
		</NavigationContainer>)
	}
}


export default MobileNavigation;