import styled from "styled-components";
import {CurrencyDollar, MapPin, Timer} from 'phosphor-react'

export const ConfirmationContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 30px;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #574F4D;
    }

    span {
        font-weight: 700;
    }
    
`

export const ConfirmationMessage = styled.div `
    width: 100%;
    padding: 0px 140px;

    h1 {
        font-family: "Baloo 2", sans-serif;
        color: ${(props) => props.theme.yellowDark};
    }
`

export const Informations = styled.div `
    display: flex;
    gap: 102px;
`

export const DeliveryDetails = styled.div`
    width: 526px;
    
    border: double 2px transparent;
    border-radius: 6px 36px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #DBAC2C, #8047F8);
    background-origin: border-box;
    background-clip: content-box, border-box;

`
export const OrderInfo = styled.div `
    display: flex;
    gap: 12px;
    margin: 40px;

    p{
        font-size: 16px;
    }

    span {
        font-family: 'Roboto',  sans-serif;
        font-size: 16px;
        font-weight: 700;

    }
`

export const MapPinYellow = styled(MapPin) `
    width: 32px;
    height: 32px;
    padding: 8px;
    background-color: #8047F8;
    border-radius: 999px;
` 

export const TimerYellow = styled(Timer)`
    width: 32px;
    height: 32px;
    padding: 8px;
    background-color: #DBAC2C;
    border-radius: 999px;
`

export const DollarCircle = styled(CurrencyDollar) `
    width: 32px;
    height: 32px;
    padding: 8px;
    background-color: #DBAC2C;
    border-radius: 999px;
`