import React from 'react'

import { HeaderDiv } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <div>Analise de entregas / Data de referência: <input type="date"/></div>
      <div>Sono &amp; Arte</div>
    </HeaderDiv>
  )
}

export default Header