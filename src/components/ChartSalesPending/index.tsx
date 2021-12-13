import { Pie } from 'react-chartjs-2'

import { ContainerChart } from '../../styles/global'
import { useDashboard } from '../../context/DashboardContext'

const ChartSalesWait: React.FC = () => {
  const { salesOpenDatas } = useDashboard()

  return (
    <>
      <h2>Vendas Pendentes</h2>
      <ContainerChart>
        <Pie 
          data={{
            labels: [`Atrasadas - ${salesOpenDatas.statusSales[0]}`, `Aguardando - ${salesOpenDatas.statusSales[1]}`, `Agendadas - ${salesOpenDatas.statusSales[2]}`],
            datasets: [
              {
                label: '# of Votes',
                data: salesOpenDatas.statusSales,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                position: 'left',
                align: 'end',
                labels: {
                  color: '#FFF'
                }
              },
              title: {
                display: true,
                text: `Total de vendas: ${salesOpenDatas.totSalesOpen}`,
                color: '#fff'
              }
            },
          }}
        />
      </ContainerChart>
    </>
  )
}

export default ChartSalesWait