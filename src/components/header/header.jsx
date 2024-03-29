import {
    HeaderDiv,
    SettingDiv,
    UserDiv,
    ButtonsDiv,
    MenuDiv
} from './header.styles'
import {useState} from 'react'
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg'
import {ReactComponent as MenuIcon} from '../../icons/menu.svg'
import SettingsDropDown from '../settings-drop-down/settings-drop-down'
import UserDropDown from '../user-drop-down/user-drop-down'
import { selectCurrentMedia } from '../../store/media/media.selector'
import { selectCurrentTheme } from '../../store/theme/theme.selector'
import { selectCurrentUser } from '../../store/user/user.selecter'
import { useSelector } from 'react-redux'



const Header = (props) => {

    const [settingsToggle, setSettingsToggle] = useState(false)
    const [userToggle, setUserToggle] = useState(false)
    const currentTheme = useSelector(selectCurrentTheme)
    const currentUser = useSelector(selectCurrentUser)
    const currentMedia = useSelector(selectCurrentMedia)

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
            <MenuDiv>
            {currentMedia.isMobile ? <MenuIcon onClick={props.menuClick} width='30' height='30' fill={currentTheme.third} /> : <></>}
            </MenuDiv>
            <ButtonsDiv>
            <SettingDiv onClick={()=>settingsClick()}>
                <SettingsIcon width='25' height='25' fill={currentTheme.third} stroke={currentTheme.third} />
            </SettingDiv>
            {settingsToggle ? (<SettingsDropDown settingsToggle={settingsClick}/>) : (<></>) }
            {userToggle ? (<UserDropDown userToggle={userClick}/>) : (<></>)}
            <UserDiv onClick={()=>userClick()}>
                <h1>{currentUser.displayName[0]}</h1>
            </UserDiv>
            </ButtonsDiv>
        </HeaderDiv>
    )
}

export default Header;