import styled, { keyframes } from 'styled-components'

export const HomePageContainer = styled.div`
    background-color: #3793de;
    width: 100%;
    height: 100vh;
    height: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const ContentContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    h1 {
        color: white;
        font-size: 2.5em;
    }
    h3 {
        font-weight: normal;
        color: white;

    }

`
export const ButtonsContainer = styled.div`
    display: flex; 
    button {
        font-weight: bold;
        border: none;
        padding: 15px;
        color: #3793de;
        background: white; 
        margin: 10px;
        border-radius: 10px;
        &: hover {
            background: #e8e8e8;
            cursor: pointer;
            color: #3e90c7;
        } 
    }
`
const changeGradient = keyframes`
    from {
        background: #3793de;
    }
    to {
        background: white;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 190px;
    padding: 60px;
    background-image: linear-gradient(white, #3793de)
`

