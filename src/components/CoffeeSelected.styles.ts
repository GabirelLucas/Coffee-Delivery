import styled from "styled-components";
import { Trash } from 'phosphor-react'

export const ChosenCoffee =  styled.div `
    display: flex;
    gap: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    border-bottom: 2px solid #a3a2a2;
    padding: 10px;
    
    img {
        width: 65px;
    }

    p {
        font-weight: 400;
    }

    span {
        font-weight: 700;
        margin-left: 30px;
    }

    input {
        width: 75px;
        height: 32px;
        border-radius: 8px;
        border: none;
        background-color: #DEDEDE;
        text-align: center;
        outline: none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    section {
        display: flex;
        gap: 8px;
    }

    section button {
        width: 92px;
        height: 32px;
        padding: 0px 8px;
        border-radius: 8px;
        border: none;
        display: flex;
        align-items: center;
        gap: 4px;

        background-color: #DEDEDE;
        text-align: center;
        color: #574F4D;
        font-size: 12px;
        font-weight: 400;
    }
`

export const Remove = styled(Trash) `
    border-radius: 5px;
    width: 16px;
    height: 16px;
    color : ${(props) => props.theme.yellow}
`