import React from 'react'

import ChartSalesByShop from '../../components/ChartSalesByShop'
import ChartSalesDeliverys from '../../components/ChartSalesDeliverys'
import ChartSalesPending from '../../components/ChartSalesPending'

import { Container, Box1, Box2, Box3, BoxChart, Box4, Box5 } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Box1>
        <h2>Entregas no prazo</h2>
        <label>96 %</label>
        <div>
          <span>Dentro: 600 Fora: 600</span>
        </div>
      </Box1>
      <Box2>
        <ChartSalesPending />
      </Box2>
      <Box3>
        <h2>Status das vendas</h2>

        <h3>Vendas abertas</h3>
        <div>
          <span>Vendas em Montagem</span><span>2</span>
        </div>
        <div>
          <span>Vendas em Deslocamento</span><span>3</span>
        </div><br/><br/>

        <h3>Vendas Finalizadas</h3>
        <div>
          <span>Total</span><span>2</span>
        </div>
      </Box3>
      <Box4>
        <h2>Status de Rotas</h2>

        <h3>Rotas abertas</h3>
        <div>
          <span>Rotas em Montagem</span><span>2</span>
        </div>
        <div>
          <span>Rotas em Deslocamento</span><span>3</span>
        </div><br/><br/>

        <h3>Rotas Finalizadas</h3>
        <div>
          <span>Total</span><span>2</span>
        </div>
      </Box4>
      <BoxChart>
        <ChartSalesDeliverys />
      </BoxChart>
      <Box5>
        <ChartSalesByShop />
      </Box5>
    </Container>
  )
}

export default Dashboard