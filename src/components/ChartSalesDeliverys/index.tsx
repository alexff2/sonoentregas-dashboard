import { Line } from 'react-chartjs-2'
import { useDashboard } from '../../context/DashboardContext'

import { ContainerChart } from '../../styles/global'

const ChartSalesByDate: React.FC = () => {
  const { issue, delivArray, salesArray } = useDashboard()
  return(<>
    <h2>Vendas/Entregas dos ultimos 15 dias</h2>
    <ContainerChart>
      <Line 
        data={{
          labels: issue,
          datasets: [
            {
              label: 'Vendas',
              data: salesArray,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
              tension: 0.3
            },
            {
              label: 'Entregas',
              data: delivArray,
              backgroundColor: 'rgb(54, 162, 235)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.3
            },
          ],
        }
        } 
        options={{
          scales: {
            yAxes: {
              type: 'linear'
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          color: '#fff',
          datasets: {
            line: {
              segment: {
                backgroundColor: 'red'
              }
            }
          }
        }}
      />
    </ContainerChart>
  </>
)}

export default ChartSalesByDate