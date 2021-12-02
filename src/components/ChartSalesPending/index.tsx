import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'

import { ContainerChart } from '../../styles/global'

const ChartSalesWait: React.FC = () => {
  const [ data, setData ] = useState([0, 0, 0, 0])
  const [ tot, setTot ] = useState(0)

  useEffect(()=>{
    const resData = [12, 19, 3, 5]
    setData(resData)
    setTot(resData.reduce((tot, nextElement) => tot + nextElement))
  },[])

  return (
    <>
      <h2>Vendas Pendentes</h2>
      <ContainerChart>
        <Pie 
          data={{
            labels: ['Atrasadas', 'Aguardando', 'Sem estoque', 'Agendadas'],
            datasets: [
              {
                label: '# of Votes',
                data: data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
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
                text: `Total de vendas: ${tot}`,
                color: '#fff'
              }
            }
          }}
        />
      </ContainerChart>
    </>
  )
}

export default ChartSalesWait