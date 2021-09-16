
import React from 'react';
import { Line } from "react-chartjs-2";

function Canvas({valuesHistorique, dateHistorique}){

  const data = {
    labels: dateHistorique,
    datasets: [{
        label: "Visites",
        borderColor: "#da4c80",
        data: valuesHistorique,
        fill: false,
        tension: 0.3
    }]
  };

  const config = {
      type: 'line',
      data: data,
      responsive: true,
    };

    return (
        <div>
          <Line className="chart" 
                data={data}
                options={config}
                width={600} 
                height={200} />
        </div>
    )
}

export default Canvas