import { BrowserRouter,  } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import themDefault from './styles/themes/themeDefault'
import GlobalStyles from './styles/globalStyles'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>      
      <ThemeProvider theme={themDefault}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App