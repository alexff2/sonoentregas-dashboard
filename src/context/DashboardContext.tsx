import { createContext, useContext, useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import { useEmissao } from './EmissaoContext'
import api from '../services/api'

interface SalesOpenDatas {
  totSalesOpen: number
  statusSales: number[]
}

interface SalesByShop {
  labels: string[]
  datas: number[]
}

interface SalesDevInfos { 
  salesPending: number
  salesOnRelease: number
  salesOnDelivring: number
  devOnRelease: number
  delivering: number
  salesFinish: number
  devFinish: number
}

interface Dashboard {
  issue: string[]
  salesArray: number[]
  delivArray: number[]
  delivTot: number
  delivOnTime: number
  delivLate: number
  percDelivOnTime: number
  salesOpenDatas: SalesOpenDatas
  salesByShop: SalesByShop
  salesDevInfos: SalesDevInfos
}

const defaultValue = {
  issue: [''],
  salesArray: [0],
  delivArray: [0],
  delivTot: 0,
  delivOnTime: 0,
  delivLate: 0,
  percDelivOnTime: 0.1,
  salesOpenDatas: {
    totSalesOpen: 0,
    statusSales: [0,0,0]
  },
  salesByShop: {
    labels: [''],
    datas: [0]
  },
  salesDevInfos: {
    salesPending: 0,
    salesOnRelease: 0,
    salesOnDelivring: 0,
    devOnRelease: 0,
    delivering: 0,
    salesFinish: 0,
    devFinish: 0
  }
}

const DashboardContext = createContext<Dashboard>(defaultValue)

const DashboardProvider: React.FC = ({ children }) => {
  const [ datas, setDatas ] = useState<Dashboard>(defaultValue)

  const { emissao } = useEmissao()

  useEffect(()=>{
    api.get(`/dashboard/${emissao}`)
      .then(res => {
        for (let i = 0; i < res.data.issue.length; i++) {
          res.data.issue[i] = format(new Date(parseISO(res.data.issue[i])), 'dd/MM/yyyy')
        }
        setDatas(res.data)
      })
  },[emissao])

  return (
    <DashboardContext.Provider value={datas}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  return useContext(DashboardContext)
}

export default DashboardProvider