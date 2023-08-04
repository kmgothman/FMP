import styled from 'styled-components'

export const DragDropField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    
`
export const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        color: transparent;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: white;
        padding: 10px 20px;
        border-radius: 10px;
        color: #0B57D0;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }
  
    input[type=file]::file-selector-button:hover {
        background: ${props => props.theme.fourth}
    }

    button {
        margin: 30px;
        border: none;
        background: #0B57D0;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
        &:hover {
            background-color: ${props => props.theme.fourth};
            cursor: pointer;
          }
    }
`

export const NewContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);
`

export const NewContactHead = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    b {
        margin-top: 15px;
        color: ${props => props.theme.eighth};
    }
    
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
`

export const ButtonsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    div {
        display: flex;
    }
    input {
        background : ${props => props.theme.seventh};
        border: none;
        padding: 3px;
        padding-left: 10px;
        border-radius: 10px;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.eighth};
        margin: 3px;
        border-radius: 10px;
        border: none;
        color: ${props => props.theme.fifth};
        &:hover {
            background-color: ${props => props.theme.second};
            cursor: pointer;
          }
    }
`

export const ExistingContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 200px;
    width: 50%;
    border-left: 1px solid ${props => props.theme.second};

    overflow-y: scroll;
    button {
        border: none;
        border-radius: 10px;
        background: none;
        color: ${props => props.theme.third};
        &:hover {
            background-color: ${props => props.theme.seventh};
            cursor: pointer;


        }
    }
`

export const HeadContainer = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    background-color: ${props => props.theme.main};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 1px solid ${props => props.theme.second};
`

export const BodyContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.fifth};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

`