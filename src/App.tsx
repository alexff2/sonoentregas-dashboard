import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import Login from './pages/Login'

import themDefault from './styles/themes/themeDefault'
import GlobalStyles from './styles/globalStyles'

import { isAuthenticated } from './services/auth'

const App: React.FC = () => {
  return (
    <BrowserRouter>      
      <ThemeProvider theme={themDefault}>
        <GlobalStyles />
        <Route path="/" exact component={Login}/>
        {isAuthenticated() ? 
        <Routes /> : <Redirect to="/" />
        }
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App