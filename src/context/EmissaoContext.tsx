import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'

interface Emissao {
  emissao: string
  setEmissao: Dispatch<SetStateAction<string>>
}

const defaultValue = {
  emissao: '',
  setEmissao: () => null
}

const EmissaoContext = createContext<Emissao>(defaultValue)

const EmissaoProvider: React.FC = ({ children }) => {
  const [ emissao, setEmissao ] = useState(format(new Date(), 'yyyy-MM-dd'))

  return (
    <EmissaoContext.Provider value={{emissao, setEmissao}}>
      {children}
    </EmissaoContext.Provider>
  )
}

export const useEmissao = () => {
  return useContext(EmissaoContext)
}

export default EmissaoProvider