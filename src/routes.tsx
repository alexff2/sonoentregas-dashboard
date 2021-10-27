import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Dashboard from './pages/dashboard'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Dashboard}/>
    </BrowserRouter>
  )
}

export default Routes
