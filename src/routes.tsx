import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/dashboard" component={Dashboard}/>
    </>
  )
}

export default Routes
