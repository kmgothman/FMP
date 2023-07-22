import {
    HeaderDiv,
    SettingDiv,
    UserDiv,
    Button
} from './header.styles'
import {useState, useContext} from 'react'
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg'
import SettingsDropDown from '../settings-drop-down/settings-drop-down'
import UserDropDown from '../user-drop-down/user-drop-down'
import { ThemeContext } from '../../contexts/theme.context'
import { UserContext } from '../../contexts/user.context'


const Header = () => {

    const [settingsToggle, setSettingsToggle] = useState(false)
    const [userToggle, setUserToggle] = useState(false)
    const {currentTheme} = useContext(ThemeContext)
    const {currentUser} = useContext(UserContext)

    const settingsClick = () => {
        setSettingsToggle(!settingsToggle)

        if (userToggle) {
            setUserToggle(false)
        }
    }

    const userClick = () => {
        setUserToggle(!userToggle)

        if (settingsToggle) {
            setSettingsToggle(false)
        }
    }


    return(
        
        <HeaderDiv>
            <SettingDiv onClick={()=>settingsClick()}>
                <SettingsIcon width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third} />
            </SettingDiv>
            {settingsToggle ? (<SettingsDropDown/>) : (<></>) }
            {userToggle ? (<UserDropDown/>) : (<></>)}
            <UserDiv onClick={()=>userClick()}>
                <h1>{currentUser.displayName[0]}</h1>
            </UserDiv>
        </HeaderDiv>
    )
}

export default Header;