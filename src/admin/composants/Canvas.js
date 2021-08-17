import { Line } from 'react-chartjsx'
import React, {useEffect} from 'react';

import '../styles/Canvas.css'



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
              borderColor: "#da4c80",
              fill : false,
            }
          ]
        }
      }

    return (
        <div>
        <Line data={state.lineChartData} 
            options={chartOptions} 
            width={1200} 
            height={400} />
        </div>
    )
}

export default Canvas