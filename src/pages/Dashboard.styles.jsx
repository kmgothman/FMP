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
    background-color: ${props => props.theme.main};
    border-radius : 20px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

export const ContentHeadContainer = styled.div`
    display: flex;
    height: 300px;
    background-color: ${props => props.theme.tenth};
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    font-Weight: bold;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 1px ${props => props.theme.seventh} solid;
    div {
        margin-left: 40px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    h1 {
        color: ${props => props.theme.main};
        margin: 0px;
    }
    h5 {
        color: ${props => props.theme.ninth};
        margin: 0px;
    }
    
`
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.fifth};
    margin-left: 18px;
    margin-right: 18px;
    position: relative;
    top: -160px;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

export const DataCard = styled.div`
    color: ${props => props.theme.eighth};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 25px;
    margin-left: 60px;
    margin-right: 25px;
    p {
        margin: 0px;
        padding: 0px;
        color: ${props => props.theme.third};
        margin-left: 5px;
    }
    h4 {
        color: ${props => props.theme.second};
        margin: 7px;
        margin-left: 15px;
    }

`

export const DonationStatContainer = styled.div`
color: ${props => props.theme.third};
display: flex;
justify-content: center;
align-items: flex-start;

`

export const MPDStatContainer = styled.div`
color: ${props => props.theme.third};
background-color: ${props => props.theme.sixth};
display: flex;
justify-content: space-around;
align-items: flex-start;

`

export const ChartContainer = styled.div`
    margin-top: 30px;
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 85%;
    h3 {
        color: ${props => props.theme.second};
        margin-left: 85px;
    }
    img {
        justify-self: center;
        align-self: center;
        margin: 50px;
    }
`