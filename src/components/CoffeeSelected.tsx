import { ChosenCoffee, Remove } from "./CoffeeSelected.styles";
import {CoffeeContext, CoffeesProps} from "../contexts/CoffeContex"
import { useContext } from "react";

export function CoffeeSelected ({imagem, nome, value, quantity} : CoffeesProps) {
    const {removeCoffee} = useContext(CoffeeContext)

    function remove(){
        removeCoffee(nome)
    }
    return(
        <ChosenCoffee>
            <img src={imagem} />
            <div>
                <p>{nome}</p>
                <section>
                    <input type="number" min={1} defaultValue={quantity}/>
                    <button type="button" onClick={remove}> <Remove size={10} color= "#8047F8"/> REMOVER</button>
                </section>
            </div>
            <span>{`R$${value}0`}</span>
        </ChosenCoffee>
    )
}