import {useContext} from 'react'
import { UserDropContainer, UserDiv, ContactDiv, SignOutDiv, XDiv, UserInfoDiv, EmailDiv} from './user-drop-down.styles'
import {ReactComponent as SignOutIcon} from '../../icons/signout.svg'
import {Link} from 'react-router-dom'

import {UserContext} from '../../contexts/user.context'
import { ThemeContext } from '../../contexts/theme.context'
import { MediaContext } from '../../contexts/media.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'
import {ReactComponent as XIcon} from '../../icons/close.svg'

const UserDropDown = (props) => {
    const { currentUser } = useContext(UserContext)
    const { currentTheme } = useContext(ThemeContext)
    const { currentMedia } = useContext(MediaContext)
    const signOutClick = () => {
        signOutUser()
    }

    return(
        <UserDropContainer width={currentMedia.isMobile ? ('200px') : ('400px')}>
            <ContactDiv>
                <XDiv>
                    <XIcon onClick={props.userToggle} width='30' height='30' fill={currentTheme.third}/>
                </XDiv>
                <UserInfoDiv>
                    <UserDiv>
                        <h1>{currentUser.displayName[0]}</h1>
                    </UserDiv>
                    <EmailDiv>
                        <b>{currentUser.displayName}</b>
                        <p>{currentUser.email}</p>
                    </EmailDiv>
                </UserInfoDiv>
            </ContactDiv>
            <SignOutDiv>
                <SignOutIcon width='20' height='20' fill={currentTheme.third} stroke={currentTheme.third}/>
                <Link to="/" onClick={signOutClick}>Sign Out</Link>
            </SignOutDiv>
            
        </UserDropContainer>
    )
}

export default UserDropDown