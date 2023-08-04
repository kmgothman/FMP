import { UserDropContainer, UserDiv, ContactDiv, SignOutDiv, XDiv, UserInfoDiv, EmailDiv} from './user-drop-down.styles'
import {ReactComponent as SignOutIcon} from '../../icons/signout.svg'
import {Link} from 'react-router-dom'

import {signOutUser} from '../../utils/firebase/firebase.utils'
import {ReactComponent as XIcon} from '../../icons/close.svg'
import {useSelector} from 'react-redux'
import { selectCurrentMedia } from '../../store/media/media.selector';
import { selectCurrentTheme } from '../../store/theme/theme.selector';
import { selectCurrentUser } from '../../store/user/user.selecter';

const UserDropDown = (props) => {
    const currentUser = useSelector(selectCurrentUser)
	const currentTheme = useSelector(selectCurrentTheme)
	const currentMedia = useSelector(selectCurrentMedia)
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