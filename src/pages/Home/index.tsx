import {  IntroContainer, Imagen, Itens, Titulo, Description, ListCoffee, ContentMain } from "./styles"
import  {Coffee}  from '../../components/CoffeeCard';




export function Home () {

    return (
       <div>
            <IntroContainer>
                <Description>
                    <Titulo>
                        <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</span>
                    </Titulo>
               
                    <Itens>
                        <img src="/src/assets/cart-circle.svg"/> <p> Compra simples e segura </p>
                 
                        <img src="/src/assets/box.svg"/> <p>Embalagem mantém o café intacto </p>
                        <img src="/src/assets/timer.svg"/> <p>Entrega rápida e rastreada </p> 
                        <img src="/src/assets/cup.svg"/><p> O café chega fresquinho até você </p>
                    </Itens>
                </Description>
                <Imagen src="/src/assets/imagem.svg" />
            </IntroContainer>

            <ContentMain>
                <h2>Nossos Cafés</h2>
                <ListCoffee>
                    <Coffee  coffeimage="/src/assets/Tradicional.svg " tag="TRADICIONAL"  name="Expresso Tradicional" description="O tradicional café feito com água quente e grãos moídos" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Americano.svg" tag="TRADICIONAL" name="Expresso Americano" description="Expresso diluído, menos intenso que o tradicional" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Cremoso.svg" tag="TRADICIONAL" name="Expresso Cremoso" description="Café expresso tradicional com espuma cremosa" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Gelado.svg" tag="TRADICIONAL" tags="GELADO" name="Expresso Gelado" description="Bebida preparada com café expresso e cubos de gelo" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Com-leite.svg" tag="TRADICIONAL" tags="COM LEITE" name="Café com Leite" description="Meio a meio de expresso tradicional com leite vaporizado" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Latte.svg" tag="TRADICIONAL" tags="COM LEITE" name="Latte" description="Uma dose de café expresso com o dobro de leite e espuma cremosa" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Capuccino.svg" tag="TRADICIONAL" tags="COM LEITE" name="Capuccino" description="Bebida com canela feita de doses iguais de café, leite e espuma" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Macchiato.svg" tag="TRADICIONAL" tags="COM LEITE" name="Macchiato" description="Café expresso misturado com um pouco de leite quente e espuma" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Mocaccino.svg" tag="TRADICIONAL" tags="COM LEITE" name="Mocaccino" description="Café expresso com calda de chocolate, pouco leite e espuma" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Chocolate.svg" tag="ESPECIAL" tags="COM LEITE" name="Chocolate Quente" description="Bebida feita com chocolate dissolvido no leite quente e café" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Cubano.svg" tag="ESPECIAL" tags="ALCOÓLICO" name="Cubano" description="Drink gelado de café expresso com rum, creme de leite e hortelã" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Havaiano.svg" tag="ESPECIAL" name="Havaiano" description="Bebida adocicada preparada com café e leite de coco" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Arabe.svg" tag="ESPECIAL" name="Árabe" description="Bebida preparada com grãos de café árabe e especiarias" value={9.9}/>
                    <Coffee  coffeimage="/src/assets/Irlandes.svg" tag="ESPECIAL" tags="ALCOÓLICO" name="Irlandês" description="Bebida a base de café, uísque irlandês, açúcar e chantilly" value={9.9}/>
                </ListCoffee>
            </ContentMain>
            
            
                     
        </div> 
    )
}