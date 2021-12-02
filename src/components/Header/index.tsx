import { Outlet } from 'react-router-dom'
import { HeaderDiv } from './styles'

import { useEmissao } from '../../context/EmissaoContext'

const Header: React.FC = () => {
  const {emissao, setEmissao} = useEmissao()

  return (
    <>
      <HeaderDiv>
        <div>
          Analise de entregas / Data de referência: 
          <input type="date" defaultValue={emissao} onChange={e => setEmissao(e.target.value)}/>
        </div>
        <div>Sono &amp; Arte</div>
      </HeaderDiv>
      <Outlet />
    </>
  )
}

export default Header