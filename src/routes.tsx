import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/app" element={<Header />}>
        <Route path="/app" element={<Navigate to="/app/dashboard"/>}/>
        <Route path="/app/dashboard" element={<Dashboard />}/>
      </Route>

      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default RoutesApp
