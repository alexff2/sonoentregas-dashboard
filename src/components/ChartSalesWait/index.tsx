import { Pie } from 'react-chartjs-2'

import { ContainerChart } from '../../styles/global'

const data = {
  labels: ['Atrasadas', 'Aguardando', 'Sem estoque', 'Agendadas'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
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
}

const tot = data.datasets[0].data.reduce((tot, nextElement) => tot + nextElement)

const ChartSalesWait: React.FC = () => {
  return (
    <>
      <h2>Vendas Pendentes</h2>
      <ContainerChart>
        <Pie 
          data={data}
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