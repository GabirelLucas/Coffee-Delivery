import styled from "styled-components";

export const CheckIn = styled.form `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    padding: 30px 160px;

    h2{
        font-size: 18px;
        font-family: "Baloo 2", sans-serif;
        font-weight: 700;
    }
`

export const Cadastro =  styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 640px;
    gap:12px;
`

export const Registers = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    background-color: #F3F2F2;
    font-size: 16px;
    border-radius: 5px;

    div {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;

        span {
            display: block;
            margin-bottom:6px;
            color: red;
            font-size: 12px;
            font-family: 'Roboto', sans-serif;
             // Ajuste conforme necessário 
        }
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`

export const DataClients = styled.div `
    display: flex;
    flex-direction: column;
    width: 560px;

    input { 
        height: 42px;
        padding: 12px;
        background-color: #DEDEDE;
        border: none;
        border-radius: 8px;
        outline: none;
        margin-bottom: 0px;
        
        &:focus {
            border: 1px solid ${(props) => props.theme.yellowDark}
        }
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    // Ajuste para inputs de diferentes tamanhos 
    input:nth-of-type(1) {
        width: 200px;
    }

    input:nth-of-type(2) {
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: row;
        width: 560px;
        gap: 6px;

        div {
            display: flex;
            flex-direction: column;
            width: 200px;
        }

        input:nth-child(2) {
            width: 100%;
        }

        span {
            display: block;
            color: red;
            font-size: 12px; //Ajuste conforme necessário 
        }
    }

    section {
        display: flex;
        gap: 6px;
        width: 100%;

        div {
            display: flex;
            flex-direction: column;
            width: 200px;
        }

        div:nth-child(2){
            width: 960px;
            
        }
        div:nth-child(2) input{
            width: 100%;
            
        }

        div:nth-child(3) input {
            display: flex;
            flex-direction: column;
            width: 60px;
            overflow: hidden;
        }

    }
`

export const Payment = styled.div `
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    background-color: #F3F2F2;
    border-radius: 5px;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    div {
        display: flex;
        align-items: flex-start;
    }

    small {
        font-size: 14px;
    }

    section {
        display: flex;
        gap: 12px;
    }

    button {
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 10px;
        background-color: #DEDEDE;
        width: 179px;
        gap: 6px;

        font-size: 11px;

        &:hover {
            background-color: ${(props) => props.theme.baseHover};
        }

        &:focus {
            border: 1px solid ${(props) => props.theme.purple};
        }
    }

    
`

export const MessageOfWarn = styled.div`
    width: 400px;
    height: 150px;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;
    background-color: #F3F2F2;
    border-radius: 8px;

    p{
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        font-weight: 700;
    }
`

export const Soma = styled.div `
    display: flex;
    flex-direction: column;
    
    padding: 40px;
    gap: 26px;
    background-color: #F3F2F2;

    button {
        width: 368px;
        height: 46px;
        border-radius: 10px;
        border: none;
        background-color: #DBAC2C;

        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #F3F2F2;

        &:disabled {
         cursor: not-allowed;
         opacity: 0.9;
      }
    }
`

export const Total = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 357px;

    font-family: "Roboto", sans-serif;

    p {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 14px;
    }

    p > strong {
        font-size: 14px;
        font-weight: 400;
    }

     strong {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
    }
`




/*export const CheckIn = styled.form `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    padding: 30px 160px;

    h2{
        font-size: 18px;
        font-family: "Baloo 2", sans-serif;
        font-weight: 700;
    }
`

export const Cadastro =  styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 640px;
    gap:12px;
    
    
`

export const Registers = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    background-color: #F3F2F2;
    font-size: 16px;
    border-radius: 5px;

    div {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`


export const DataClients = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    input{ 
        height: 42px;
        width: 200px;
        padding: 12px;
        background-color: #DEDEDE;
        border: none;
        border-radius: 8px;
        outline: none;
        
        &:focus {
            border: 1px solid ${(props) => props.theme.yellowDark}
        }
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input:nth-child(2) {
        width: 560px;
    }

    

    div {
        display: flex;
        gap: 12px;

        input:last-child{
            width: 348px;
        }

       & > input ~ span {
            display: block;
        }
    }

    section{
        display: flex;
        gap: 12px;

        input:last-child {
             width: 60px;
            
        }

        input:nth-child(2) {
            width: 276px;
        }

    }

`

export const Payment = styled.div `
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    background-color: #F3F2F2;
    border-radius: 5px;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    

    div {
        display: flex;
        align-items: flex-start;
        
    }

    small {
        font-size: 14px;
    }

    section{
        display: flex;
        gap: 12px;
    }

    button{
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 10px;
        background-color: #DEDEDE;
        width: 179px;
        gap: 6px;

        font-size: 11px;

        &:hover {
            background-color: ${(props) => props.theme.baseHover};
        }

        &:focus{
            border: 1px solid ${(props) => props.theme.purple};
        }
    }
`

export const Soma = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 48px;
    background-color: #F3F2F2;

    button {
        width: 368px;
        height: 46px;
        border-radius: 10px;
        border: none;
        background-color: #DBAC2C;

        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #F3F2F2;

        &:disabled {
         cursor: not-allowed;
         opacity: 0.9;
      }
    }


`

export const Total = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 357px;

    font-family: "Roboto", sans-serif;
    

    p{
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 14px;
    }

    p > strong {
        font-size: 14px;
        font-weight: 400;
    }

     strong {
        display: flex;
        justify-content: space-between;
    
        font-size: 20px;
        font-weight: 700;
    }
`*/