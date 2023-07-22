import styled from 'styled-components'

export const NewTaskContainer = styled.div`
    position: relative;
    grid-area: 1/1;
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items:center;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${props => props.theme.fifth};
    top: 200px;
    right: 60px;
    z-index: 10;

    form {
        display: flex;
        flex-direction: column;
        align-items: center:
    }
    div {
        display: flex;
        background-color: ${props => props.theme.sixth};
        margin: 10px;
        padding: 5px;
        border-radius: 20px;
    }

    b {
        margin: 20px;
    }
    input {
        width: 75px;
        background-color: ${props => props.theme.eighth}; 
        color: ${props => props.theme.fifth}; 
        border: none;
        padding 8px;
        border-radius: 10px;
        margin-left: 40px;
        &:hover {
            background-color: ${props => props.theme.fifth};
            color: ${props => props.theme.eighth}; 
            cursor: pointer;
            border: 1px solid ${props => props.theme.eighth};
        }
       }
`
export const LabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    label{
        margin: 3px;
    }

`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    input {
        margin: 3px;
        width: 120px;
        border: 1px solid ${props => props.theme.third};
        padding 4px;
        padding-left: 10px;
        border-radius: 10px;
        color: ${props => props.theme.third};
        background-color: ${props => props.theme.fifth}; 
        
    }
`