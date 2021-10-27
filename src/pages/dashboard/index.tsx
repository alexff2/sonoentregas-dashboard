import React from 'react'
import ChartSalesByDate from '../../components/ChartSalesByDate'

import { Container, ContainerChart } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContainerChart>
        <ChartSalesByDate />
      </ContainerChart>
    </Container>
  )
}

export default Dashboard