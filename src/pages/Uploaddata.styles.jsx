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
    background-color: ${props => props.theme.fifth};
    margin: 0px;
    padding: 16px;
    p{
        color: ${props => props.theme.second};
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.eighth};
        background: ${props => props.theme.main};
        padding: 4px;
        border-radius: 15px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        &:hover {
            color: ${props => props.theme.fourth};
            cursor: pointer;
            background: ${props => props.theme.second};
          }
    }
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


export const UploadContainer = styled.div`
    background-color: ${props => props.theme.sixth};
    height: 476px;
    color: ${props => props.theme.third};

    div{
        display: flex;
        justify-content: center;
        align-items: center
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