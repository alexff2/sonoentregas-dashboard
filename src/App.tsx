import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import Header from './components/Header'

import themDefault from './styles/themes/themeDefault'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themDefault}>
      <GlobalStyles />
      <Header/>
      <Routes />
    </ThemeProvider>
  )
}

export default App