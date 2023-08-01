import styled from 'styled-components'

export const HeaderDiv = styled.div`
    height : 68px;
    background-color: ${props => props.theme.main};
    display: flex;
    justify-content: space-between;
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
export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
`
export const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
`