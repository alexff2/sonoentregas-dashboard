import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'

interface Data {
  emissao: String,
  setEmissao?: Dispatch<SetStateAction<String>>
}

const DataContext = createContext<Data | undefined>(void 0)

interface Props {
  children: ReactNode
}

export default function DataProvider(props: Props) {
  const { children } = props
  const [ emissao, setEmissao ] = useState(format(new Date(), 'yyyy-MM-dd'))

  const { Provider } = DataContext
  //const [ emissao, setEmissao ] = useState('')


}

