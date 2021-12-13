import { Bar } from "react-chartjs-2"
import { useDashboard } from "../../context/DashboardContext"
import { ContainerChart } from "../../styles/global"

const ChartSalesByShop: React.FC = () => {
  const { salesByShop, delivTot } = useDashboard()
  return(
    <>
      <h2>Entregas por lojas</h2>
      <ContainerChart>
        <Bar 
          data={{
            labels: salesByShop.labels,
            datasets: [
              {
                data: salesByShop.datas,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(14, 102, 255, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(14, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              title: {
                text: `${delivTot}`,
                display: true,
                color: '#fff'
              }
            },
            datasets: {
              bar: {
                order: 1
              }
            }
          }}
        />
      </ContainerChart>
    </>
  )
}

export default ChartSalesByShop