import {ShoppingCartSimple, MapPin} from 'phosphor-react'
import { HeaderContainer, City, Cart} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeContex'


export function Header () {
   const {deliveryDetails, shoppingCart, quantityOfCoffesInList} = useContext(CoffeeContext)
   const emptyList = shoppingCart.length == 0;
   
   return (
      <HeaderContainer>
         <NavLink to="/">
            <img src="/src/assets/Logo-coffee.svg" />
         </NavLink>
         
         <nav>

            <City to='/'><MapPin color='#4B2995' size={24}/>{deliveryDetails.city}</City>
            {
               emptyList ? (
                  <Cart to="/carrinho"><ShoppingCartSimple color='#C47F17' size={24}/></Cart>
               ) : (
                  <Cart to="/carrinho"><ShoppingCartSimple color='#C47F17' size={24}/> <span>{quantityOfCoffesInList}</span></Cart>
               )
            }

            
         </nav>

      </HeaderContainer>
   )
}