import {createContext, ReactNode, useState, useEffect, useReducer } from "react"

export interface CoffeesProps {
    imagem: string,
    nome: string,
    value: number,
    quantity: number
}

export interface DatasOfDeliveryType {
    CEP?: number,
    street : string,
    numero : number,
    complement?: string,
    neighborhood: string,
    city: string,
    state: string,
    paymentMethod: string
}

interface CoffeeContextTypes {
    CreateCoffee : (coffeeData: CoffeesProps) => void,
    shoppingCart : CoffeesProps[],
    DataOfDelivery : (data: DatasOfDeliveryType ) => void,
    deliveryDetails : DatasOfDeliveryType
    totalValueCoffee: number,
    handleUpdateCart : (newList: CoffeesProps[]) => void,
    removeCoffee : (name : string) => void,
    quantityOfCoffesInList: number
}

interface CoffeeContexProviderTypes {
    children : ReactNode
}


export const CoffeeContext = createContext({} as CoffeeContextTypes)


export function CoffeeContexProvider({children}: CoffeeContexProviderTypes){
    
    const [shoppingCart, setShoppingCart] = useState<CoffeesProps[]>([])
    const [totalValueCoffee, setTotalValueCoffee] = useState<number>(0)
    const [quantityOfCoffesInList, setQuantityOfCoffesInList] = useState<number>(0)
    const [deliveryDetails, setDeliveryDetails] = useState<DatasOfDeliveryType>({
        city: "",
        neighborhood: "",
        numero: 0,
        state: "",
        street: "",
        paymentMethod:""
    })
    
    useEffect(() => { 
        let total = 0
        shoppingCart.map((coffee) => {
            const sumOfCoffeValues = parseFloat((coffee.quantity * coffee.value).toFixed(2))
            total += sumOfCoffeValues
        })
        setTotalValueCoffee(parseFloat(total.toFixed(2)))
        setQuantityOfCoffesInList(shoppingCart.length)
    }, [shoppingCart])


    function CreateCoffee(coffeeData: CoffeesProps)  {
            setShoppingCart((state) => [...state, coffeeData])
    }

    function DataOfDelivery(details: DatasOfDeliveryType){
        setDeliveryDetails(details)
    }

    function handleUpdateCart (newList: CoffeesProps[]){
        setShoppingCart(newList)
    }

    function removeCoffee (name: string) {
        const indexToRemove = shoppingCart.findIndex(coffee => coffee.nome === name)
        const updatedCart = shoppingCart.filter((_, index) => index !== indexToRemove);
        setShoppingCart(updatedCart)
    }
    


    return(
        <CoffeeContext.Provider value={{ 
                CreateCoffee, 
                shoppingCart, 
                DataOfDelivery, 
                deliveryDetails, 
                totalValueCoffee, 
                handleUpdateCart, 
                removeCoffee, 
                quantityOfCoffesInList
            }}>
            {children}
        </CoffeeContext.Provider>
    )
}