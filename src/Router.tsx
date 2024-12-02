import {Routes, Route} from 'react-router-dom'
import { Carrinho } from './pages/Carrinho'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Home } from './pages/Home'

export function Router () {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={ <Home/> }/>
                <Route path='/carrinho' element={<Carrinho/>}/>
            </Route>
        </Routes>
    )   
}