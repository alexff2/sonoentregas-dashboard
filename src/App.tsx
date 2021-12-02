import { BrowserRouter,  } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import themDefault from './styles/themes/themeDefault'
import GlobalStyles from './styles/globalStyles'
import Routes from './routes'
import DefaultContext from './context/DefaultContext'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DefaultContext>
        <ThemeProvider theme={themDefault}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </DefaultContext>
    </BrowserRouter>
  )
}

export default App