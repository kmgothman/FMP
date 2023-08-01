
import {useEffect} from 'react'
import { 
    SettingsContainer,
    XDiv,
    ButtonsDiv
} from './settings-drop-down.styles'
import {useState, useContext} from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import { ReactComponent as XIcon} from '../../icons/close.svg'

const SettingsDropDown = (props) => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)



    const themeClick = () => {
        if (currentTheme.mode == 'dark') {
            setCurrentTheme({
                mode: "light",
                main: "#f7f7f7",
                second: "#adadad",
                third: "#202124",
                fourth: "#e3e3e3",
                fifth: "white",
                sixth: "#F2F6FC",
                seventh: "#c9c9c9",
                eighth: "#0B57D0",
                ninth: "#C2E7FF",
                tenth: "#3793de"
            })
        } else {
            setCurrentTheme({
                mode: "dark",
                main: "#232629",
                second: "#425b7a",
                third: "#cbced1",
                fourth: "#425b7a",
                fifth: "#1d2229",
                sixth: "#5e6b7a",
                seventh: "#525252",
                eighth: "#5580b5",
                ninth: "#335d87",
                tenth: "#28497d"
            })
        }
    }

    return(
        <SettingsContainer>
            <XDiv>
                <XIcon onClick={props.settingsToggle} width='30' height='30' fill={currentTheme.third}/>
            </XDiv>
            <ButtonsDiv>
                <p>Dark Theme</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span onClick={themeClick} class="slider round"></span>
                </label>
            </ButtonsDiv>
        </SettingsContainer>
    )
}

export default SettingsDropDown