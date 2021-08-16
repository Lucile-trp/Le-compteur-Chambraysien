import { Line } from 'react-chartjsx'
import React, {useEffect } from 'react';



function Canvas({valuesHistorique, dateHistorique}){


    const chartOptions = {
        responsive: false
      }
     const state = {
        lineChartData: {
          
          labels:  dateHistorique,
          datasets: [{ 
              data: valuesHistorique,
              label: "Visites",
              borderColor: "#3cba9f",
              fill : false,
            }
          ]

        }
      }

    return (
        <div>
        <Line data={state.lineChartData} 
            options={chartOptions} 
            width={800} 
            height={275} />
        </div>
    )
}

export default Canvas