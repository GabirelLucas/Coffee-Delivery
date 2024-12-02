import {  ChangeEvent, FormEvent, useContext, useState } from "react"
import { Acount, Buy, CardContainer, Tipo } from "./CoffeeCard.styles"
import { ShoppingCartSimple } from "phosphor-react"
import { CoffeeContext } from "../contexts/CoffeContex"


export interface CoffeeProps {
    coffeimage : string,
    tag ?: string ,
    name : string,
    description ?: string,
    tags ?: string ,
    value: number,
}


export function Coffee ({coffeimage, tag, name, description, tags, value} : CoffeeProps) {
    
    const [quantity, setQuantity] = useState(0)
    const {CreateCoffee, shoppingCart, handleUpdateCart } = useContext(CoffeeContext)

    const validQuantity = (quantity <= 0)

    function handleQuantityChange (e: ChangeEvent<HTMLInputElement>) {
        setQuantity(parseInt(e.target.value))
    }


    function handleCreatCoffee(e: FormEvent){
        e.preventDefault()
        const coffeeExist =  shoppingCart.find(coffee => coffee.nome == name)
        
        if (coffeeExist) {
            const updatedCart = shoppingCart.map(coffee =>
                coffee.nome === name ? { ...coffee, quantity } : coffee
            );
            handleUpdateCart(updatedCart);
        } else {
            const coffee  ={
                imagem : coffeimage,
                nome: name,
                value: value,
                quantity : quantity
            }
            CreateCoffee(coffee)
        }
    }
    
    return (
       <CardContainer>
            <img src={coffeimage}  />

            <Tipo>
                { tags ? (
                    <Tipo>
                        <p>{tag}</p><p>{tags}</p>
                    </Tipo> 
                ) : (
                    
                    <Tipo>
                        <p>{tag}</p>
                    </Tipo>
                ) }
            </Tipo>

            <strong>{name}</strong>
            <sub>{description} </sub> 
            <Buy>
                <p><small>R$</small>{`${value}0`}</p>
                <Acount action="" >
                    <input type="number" min={0} step={1} placeholder="Quantidade" onChange={handleQuantityChange} />
                    <button type="button" onClick={handleCreatCoffee} disabled={validQuantity}><ShoppingCartSimple size={22} color= "#F3F2F2" /></button>
                </Acount>
            </Buy>
       </CardContainer> 
    )
}