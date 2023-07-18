import styled from 'styled-components'

export const HeaderDiv = styled.div`
    height : 68px;
    background-color: ${props => props.theme.main};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h1 {
        color: white;
    }
`
export const UserDiv = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 20px;
    background-color: #dc9ae3;
    margin : 4px;
    margin-right: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #e3e3e3; 
    }
`
export const SettingDiv = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 20px;
    margin : 4px;
    display : flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #e3e3e3;
      }

`


    	// Define our button, but with the use of props.theme this time
    export const Button = styled.button`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
    
        /* Color the border and text with theme.main */
        color: ${props => props.theme.main};
        border: 2px solid ${props => props.theme.main};
        `;
    
    // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
        Button.defaultProps = {
        theme: {
        main: "yellow",
        second: "blue"
        }
        }