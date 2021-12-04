import { createContext, useContext, useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import { useEmissao } from './EmissaoContext'
import api from '../services/api'

interface Dashboard {
  issue: string[]
  salesArray: number[]
  delivArray: number[]
  delivTot: number
  delivOnTime: number
  delivLate: number
  percDelivOnTime: number
}

const defaultValue = {
  issue: [''],
  salesArray: [0],
  delivArray: [0],
  delivTot: 0,
  delivOnTime: 0,
  delivLate: 0,
  percDelivOnTime: 0.1
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
    <DashboardContext.Provider value={{
      issue: datas.issue,
      salesArray: datas.salesArray,
      delivArray: datas.delivArray,
      delivTot: datas.delivTot,
      delivOnTime: datas.delivOnTime,
      delivLate: datas.delivLate,
      percDelivOnTime: datas.percDelivOnTime
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  return useContext(DashboardContext)
}

export default DashboardProvider