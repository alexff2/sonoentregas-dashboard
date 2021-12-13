import { BrowserRouter,  } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Chart } from 'chart.js'
import ChartDatalabels from 'chartjs-plugin-datalabels'


import themDefault from './styles/themes/themeDefault'
import GlobalStyles from './styles/globalStyles'
import Routes from './routes'
import DefaultContext from './context/DefaultContext'
import React from 'react'

const App: React.FC = () => {
  React.useEffect(()=>{
    Chart.register(ChartDatalabels)
  },[])
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