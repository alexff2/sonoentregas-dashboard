import { useEffect, useState, FC } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderDiv } from './styles'
import { format } from 'date-fns'
import api from '../../services/api'

interface ISalesByday {
  SALES: number,
  EMISSAO: string
}

const Header: FC = () => {
  const [ dateSearch, setDateSearch] = useState(format(new Date(), 'yyyy-MM-dd'))

  useEffect(() => {
    api.get<ISalesByday[]>(`/dashboard/${dateSearch}`)
      .then(resp =>{
        console.log(resp.data)
      })
  },[dateSearch])

  return (
    <>
      <HeaderDiv>
        <div>
          Analise de entregas / Data de referência: 
          <input type="date" defaultValue={format(new Date(), 'yyyy-MM-dd')} onChange={e => setDateSearch(e.target.value)}/>
        </div>
        <div>Sono &amp; Arte</div>
      </HeaderDiv>
      <Outlet />
    </>
  )
}

export default Header