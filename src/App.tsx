import { Router } from './Router'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyles } from './styles/Global.styles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CoffeeContexProvider} from './contexts/CoffeContex'
export function App() {
  
return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
            <CoffeeContexProvider>
                <Router />
            </CoffeeContexProvider>
        </BrowserRouter>  
    </ThemeProvider>
) 
}

