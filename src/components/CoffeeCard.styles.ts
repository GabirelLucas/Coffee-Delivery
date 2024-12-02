import styled from "styled-components";
import {ShoppingCartSimple} from 'phosphor-react'

export const CardContainer = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   text-align: center;

   width: 256px;
   height: 310px;
   background-color: #F3F2F2;
   padding: 0px 10px;
   font-family: 'Baloo 2', cursive;

   font-size: 20px;
   border-radius: 6px 36px;

   img {
    margin-top: -40px;
    size: 120px;
   }

   sub{
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #8D8686;
   }
`

export const Tipo = styled.span `
   display: flex;
   gap: 10px;
   
   p {
      background-color: #F1E9C9;
      color: #C47F17;
      border-radius: 9999px;
      padding: 5px;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
   }
`
export const Buy = styled.div `
   display: flex;
   gap: 23px;

   p{
      font-family: 'Baloo 2', cursive;
      color: #574F4D ;
   } 

   small{
      font-size: 14px;
      
   }
`

export const Acount = styled.form `
   display: flex;
   gap: 8px;

   input {
    width: 90px;
    text-align: center;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #E6E5E5;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
   }

   button {
      background-color: #4B2995;
      border: none;
      border-radius: 5px;
      padding: 6px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;

      cursor: pointer;

      &:active {
         opacity: 0.8;
      }

      &:hover {
         background-color: #8047F8;
      }

      &:disabled {
         cursor: not-allowed;
         opacity: 0.9;
      }

   }

`