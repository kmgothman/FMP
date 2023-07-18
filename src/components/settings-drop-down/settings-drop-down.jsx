

import { SettingsContainer } from './settings-drop-down.styles'
import {useState, useContext} from 'react'
import { ThemeContext } from '../../contexts/theme.context'

const SettingsDropDown = () => {
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
                eighth: "#5580b5"
            })
        }
    }
    return(
        <SettingsContainer>
            <p>Dark Theme</p>
            <label class="switch">
                <input type="checkbox"/>
                <span onClick={themeClick} class="slider round"></span>
            </label>
        </SettingsContainer>
    )
}

export default SettingsDropDown