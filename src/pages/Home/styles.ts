import styled from 'styled-components'

export const IntroContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 94px 160px;
    gap: 56px;
`

export const Imagen = styled.img `
    height: 335px;
    
`

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    gap: 66px;
`

export const Titulo = styled.div `
    font-family: "Baloo 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    width:588px;
    gap: 16px;

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: #403937;
        font-weight: 400;
    }
`

export const Itens = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 500px;
    gap: 12px;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
`

export const ListCoffee = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 54px 110px;
    justify-content: flex-start;
`
export const ContentMain = styled.main `
    display: flex;
    flex-direction: column;

    h2{
        text-align: start;
        margin: 0 110px;
        font-family: 'Baloo 2', cursive;
        font-size: 30px;
    }
`

