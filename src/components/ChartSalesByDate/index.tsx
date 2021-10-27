import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  datasets: [
    {
      label: 'Vendas',
      data: [12, 19, 3, 5, 2, 3, 4, 5, 1, 9],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.3
    },
    {
      label: 'Entregas',
      data: [3, 2, 1, 1, 2, 2, 4, 3, 1, 2],
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.3
    },
  ],
}

const ChartSalesByDate: React.FC = () => (
  <>
    <h2>Vendas por dia</h2>
    <Line 
      data={data} options={{
        scales: {
          yAxes: {
            type: 'linear'
          }
        },
      }}
    />
  </>
);

export default ChartSalesByDate