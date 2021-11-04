import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Header from './components/Header'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

const Routes: React.FC = () => {
  return useRoutes([
    {
      path: '/app',
      element: <Header />,
      children: [
        { element: <Navigate to="/app/dashboard" replace /> },
        { path: 'dashboard', element: <Dashboard /> }
      ]
    },
    {
      path: '/',
      element: <div />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <h1>Not Found</h1> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ])
}

export default Routes
