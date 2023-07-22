import styled from 'styled-components'

export const MainContainer = styled.div`
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    grid-column-start: 2;
    grid-column-end:3;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.main};
`


export const ContentContainer = styled.div`
    background-color: ${props => props.theme.fifth};
    border-radius : 20px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`

export const ContentControlsContainer = styled.div`
    display: flex;
    height: 68px;
    justify-content: flex-start;
    align-items: flex-end;
    font-Weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 1px ${props => props.theme.seventh} solid;
    button {
        border: none;
        background: none;
        font-weight: bold;
        font-size: 1rem;
        padding: 10px;
        color: ${props => props.theme.second};
        &:hover {
            color: ${props => props.theme.fourth};
            cursor: pointer;
        }

    }
    div {
        margin-left: 25px
    }
    
`


export const TableContainer = styled.div`
    background-color: ${props => props.theme.sixth};
    height: 476px;
    overflow-y: scroll;
    color: ${props => props.theme.third};
    
    table {
        padding-top: 5px;
       width: 100%;
       border: 1px solid;
       border-color: ${props => props.theme.seventh};
        border-collapse: collapse;

    }
    tr {
        height : 30px;
        border: 1px solid
        border-style: solid
        border-color: black;
        &:hover {
            background-color: ${props => props.theme.fourth};
        }
    }
    td {
        border: 1px solid;
        border-color: ${props => props.theme.seventh};
        text-align: left;
        padding-left: 20px
    }
    a {
        text-decoration: none;
        color: #0B57D0;
    }
    img {
        margin-top: 200px
    }
    button {
        border: none;
        background: ${props => props.theme.fifth};
        color: ${props => props.theme.eighth};
        font-weight: bold;
        padding: 4px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 15px;
        &:hover {
            background-color: ${props => props.theme.second};
        }
    
`

export const ControlDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #0B57D0;
    margin: 15px;
    &:hover {
        color: ${props => props.theme.fourth};
        cursor: pointer;
      }
    div {
        display: flex;
        flex-direction: row;
    }
`

export const TitleContainer = styled.div`
    background-color: ${props => props.theme.fifth};
    margin: 0px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        color: ${props => props.theme.second};
        margin-left: 35px;
        margin-right: 35px;
        font-size: 1em
    }
`

export const ContactInfoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    div {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
`