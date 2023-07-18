import {useContext} from 'react'
import { UserDropContainer, UserDiv, ContactDiv, SignOutDiv} from './user-drop-down.styles'
import {ReactComponent as SignOutIcon} from '../../icons/signout.svg'
import {Link} from 'react-router-dom'

import {UserContext} from '../../contexts/user.context'
import { ThemeContext } from '../../contexts/theme.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'

const UserDropDown = () => {
    const { currentUser } = useContext(UserContext)
    const { currentTheme } = useContext(ThemeContext)
    const signOutClick = () => {
        signOutUser()
    }

    return(
        <UserDropContainer>
            <ContactDiv>
                <UserDiv>
                    <h1>{currentUser.displayName[0]}</h1>
                </UserDiv>
                <div>
                    <b>Kelvin Gothman</b>
                    <p>{currentUser.email}</p>
                </div>
            </ContactDiv>
            <SignOutDiv>
                <SignOutIcon width='20' height='20' fill={currentTheme.third} stroke={currentTheme.third}/>
                <Link to="/" onClick={signOutClick}>Sign Out</Link>
            </SignOutDiv>
            
        </UserDropContainer>
    )
}

export default UserDropDown