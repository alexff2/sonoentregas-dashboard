import { createContext, useContext, useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import { useEmissao } from './EmissaoContext'
import api from '../services/api'

interface Dashboard {
  days: string[]
  salesByday: number[]
  delivByday: number[]
}

const defaultValue = {
  days: [''],
  salesByday: [0],
  delivByday: [0]
}

const DashboardContext = createContext<Dashboard>(defaultValue)

const DashboardProvider: React.FC = ({ children }) => {
  const [ days, setDays ] = useState<[string]>([''])
  const [ salesByday, setSalesByday ] = useState<[number]>([0])
  const [ delivByday, setDelivByday ] = useState<[number]>([0])
  const { emissao } = useEmissao()

  useEffect(()=>{
    api.get(`/dashboard/salesbydeliv/${emissao}`)
      .then(res => {
        for (let i = 0; i < res.data.issue.length; i++) {
          res.data.issue[i] = format(new Date(parseISO(res.data.issue[i])), 'dd/MM/yyyy')
        }
        setDays(res.data.issue)
        setSalesByday(res.data.salesArray)
        setDelivByday(res.data.delivArray)
      })
  },[emissao])

  return (
    <DashboardContext.Provider value={{
      days,
      salesByday,
      delivByday
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  return useContext(DashboardContext)
}

export default DashboardProvider