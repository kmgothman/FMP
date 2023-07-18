import styled from 'styled-components'

export const MainContainer = styled.div`
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    grid-column-start: 2;
    grid-column-end:3;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.main};
`

export const InstructionsContainer = styled.div`
    background-color: ${props => props.theme.second};
    margin: 0px;
    padding: 16px;

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
    align-items: center;
    font-Weight: bold; 
    p {
        color: ${props => props.theme.third};
    }
    div {
        margin-left: 25px
    }
    
`
export const FilterContainer = styled.div`
    margin-left: 25px;
    button {
        margin: 6px;
        border: none;
        padding: 7px;
        border-radius: 20px;
        background-color: ${props => props.theme.sixth};
        &:hover {
            background-color: ${props => props.theme.fifth};
        }

    }
    `

export const SearchContainer = styled.div`
    background-color: ${props => props.theme.sixth};
    padding: 5px;
    border-radius : 20px;
    display: flex;
    input {
        border: none;
        background-color: ${props => props.theme.sixth};
    }
`

export const UploadContainer = styled.div`
    background-color: ${props => props.theme.sixth};
    height: 476px;
    color: ${props => props.theme.third};

    div{
        display: flex;
        justify-content: center;
        align-items: center
    }
    
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