
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"

import { CoffeeSelected } from "../../components/CoffeeSelected";
import { Confirmation } from "../../components/Confirmation";

import { CoffeeContext } from "../../contexts/CoffeContex";

import { Cadastro, CheckIn, DataClients, MessageOfWarn, Payment, Registers, Soma, Total } from "./styles";

import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

export interface DatasOfDeliveryType {
    cep?: number,
    street : string,
    numero : number,
    complement?: string,
    neighborhood: string,
    city: string,
    state: string,
    paymentMethod: string
}

const deliveryFormValidationSchema = zod.object({
    cep: zod.string().min(8, "Informe um CEP válido"),
    street: zod.string().min(5, "Insira um endereço válido, EX:(Rua Fulano de Tal)"),
    numero: zod.string().min(1, "Informe um número válido"),
    neighborhood: zod.string().min(3, "Informe um bairro válido"),
    city: zod.string().min(3, "Cidade inválida"),
    state: zod.string().min(2, "Estado inválido")

})

export function Carrinho () {
    const [ ordenerConfirmation, setOrdenerConfirmation] = useState(true)
    const {shoppingCart, DataOfDelivery, totalValueCoffee,} = useContext(CoffeeContext)
    const {register, handleSubmit, formState: { errors }, setValue, watch} = useForm<DatasOfDeliveryType>({
        resolver: zodResolver(deliveryFormValidationSchema)
    })

    const paymentMethod = watch('paymentMethod')

    function handlePaymentMethodChange(e: React.MouseEvent<HTMLButtonElement>){
        const type = e.currentTarget.value
        console.log(type)
        
        setValue('paymentMethod', type, { shouldValidate: true })
    }
    
    function handleSendingDataDelivery(data: DatasOfDeliveryType){
        console.log(paymentMethod)
        const details = {
            street : data.street,
            numero : data.numero,
            complement: data.complement,
            neighborhood: data.neighborhood,
            city: data.city,
            state: data.state,
            paymentMethod: paymentMethod
        }
        DataOfDelivery(details)
        setOrdenerConfirmation(false)
    }

    const listOfProducts = shoppingCart.length == 0;

    

    if(ordenerConfirmation) {
        return (
        <CheckIn onSubmit={handleSubmit(handleSendingDataDelivery)}>
            
            <Cadastro>
                <h2>complete seu pedido</h2>
                <Registers>
                    <div>
                        <img src="/src/assets/MapPin-Yellow.svg" alt="" />
                        <p>
                            endereço de entrega <br />
                            <small> Informe o endereço onde deseja receber seu pedido</small>
                        </p>
                          
                    </div>  

                    <DataClients  >
                        
                        <input type="number" placeholder="CEP" {...register('cep')}/>
                        {errors.cep && <span>{errors.cep.message}</span>}

                        <input type="text" placeholder="Rua" {...register('street')} />
                        {errors.street && <span>{errors.street.message}</span>}
                        

                        <div>
                            <div>
                                <input type="number" placeholder="Número" {...register('numero')}/>
                                {errors.numero && <span>{errors.numero.message}</span>}
                            </div>
                            <input type="text" placeholder="Complemento (Opcional)" {...register('complement')}/> 
                        </div>
                        <section>
                            <div>
                                <input type="text" placeholder="Bairro" {...register('neighborhood')}/>
                                {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
                            </div>
                            <div>
                                <input type="text" placeholder="Cidade" {...register('city')}/>
                                {errors.city && <span>{errors.city.message}</span>} 
                            </div>
                            <div>
                                <input type="text" placeholder="UF" {...register('state')}/>
                                {errors.state && <span>{errors.state.message}</span>} 
                            </div>
                        </section>
                    </DataClients>
                </Registers>

                <Payment>
                    <div>
                        <img src="/src/assets/Cifrao.svg"/>
                        <p>
                            Pagamento <br /> 
                            <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
                        </p>
                    </div>
                            
                    <section>
                        <button type="button" onClick={handlePaymentMethodChange} value={'Cartão de Crédito'}> 
                            <img src="/src/assets/Credit.svg" alt="" />
                            CARTÃO DE CRÉDITO
                        </button>
                        <button type="button" onClick={handlePaymentMethodChange} value={'Cartão de Débito'}> 
                            <img src="/src/assets/Bank.svg" alt="" /> 
                            CARTÃO DE DÉBITO
                        </button>
                        <button type="button" onClick={handlePaymentMethodChange} value={'Dinheiro'}> 
                            <img src="/src/assets/Cash.svg" alt="" /> 
                            DINHEIRO 
                        </button>
                    </section>

                    <input type="hidden" {...register('paymentMethod')} />
                </Payment>
                
            </Cadastro>
            
            <div>
                <h2>cafés selecionados</h2>
                {listOfProducts ? (
                    <MessageOfWarn>
                        <p>Você ainda não escolheu seu café!!!</p>
                    </MessageOfWarn>
                ) 
                    :
                (
                    <Soma>
                        {shoppingCart.map(coffee => (
                            <CoffeeSelected
                                imagem={coffee.imagem}
                                nome={coffee.nome}
                                value={coffee.value}
                                quantity={coffee.quantity}
                                key={coffee.nome}
                            />
                        ))}
                        <Total>
                            <p>Total de Itens <strong>R${totalValueCoffee}0</strong></p>
                            <p>Entrega <strong>R$09,90</strong></p>
                            <strong>Total <span>R${(totalValueCoffee + 9.9).toFixed(2)}</span></strong>
                        </Total>
                        <button type="submit">CONFIRMAR PEDIDO</button>
                    </Soma>
                )}
            </div>
        </CheckIn>
        )
    } else {
    
        return (
            <Confirmation/>    
        )
        
    }
    
}