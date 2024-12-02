import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    padding: 32px 160px 32px 130px;
    
    nav {
        display: flex;
        gap: 12px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        height: 30px;
        border-radius: 5px;
        text-decoration: none;
    }
    ` 

    export const City = styled(NavLink) `
        background-color: #EBE5F9;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
    `

    export const Cart = styled(NavLink) `
        background-color: #F1E9C9;
        position: relative;

        span{
            width: 20px;
            height: 20px;
            left: 30px;
            bottom: 20px;
            position: absolute;
            border-radius: 9999px;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #C47F17;
            color: #F1E9C9;
            font-size: 12px;
            font-weight: 700;
        }
    `