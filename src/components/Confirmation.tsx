import { useContext } from 'react'
import {ConfirmationContainer, ConfirmationMessage, DeliveryDetails, DollarCircle, Informations, MapPinYellow, OrderInfo, TimerYellow} from './Confimation.styles'
import { CoffeeContext } from '../contexts/CoffeContex'





export function Confirmation () {
    const {deliveryDetails } = useContext(CoffeeContext)

   return(
     <ConfirmationContainer>
        <ConfirmationMessage>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
        </ConfirmationMessage>
        <Informations>
            <DeliveryDetails>
                <OrderInfo>
                    <MapPinYellow size={32} color="#fffdfa" weight="fill" />
                    <div>
                        <p>
                            Entrega em <span>{deliveryDetails.street}, {deliveryDetails.numero}</span> <br />
                             {deliveryDetails.neighborhood} - {deliveryDetails.city}, {deliveryDetails.state} 
                        </p>
                    </div>
                </OrderInfo>
                <OrderInfo>
                    <TimerYellow size={32} color="#fffdfa" weight="fill" />
                    <div>
                        <p>Previsão de entrega</p>
                        <span>20 min - 30 min </span>
                    </div>
                </OrderInfo>
                <OrderInfo>
                    <DollarCircle size={32} color="#fffdfa" />
                    <div>
                        <p>Pagamento na entrega</p>
                        <span>{deliveryDetails.paymentMethod}</span>
                    </div>
                </OrderInfo>
            </DeliveryDetails>
            <img src="/src/assets/illustration.svg" alt="" />
        </Informations>
     </ConfirmationContainer>
   )
}