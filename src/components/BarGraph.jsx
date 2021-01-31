import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function BarGraph() {

    const data = {
        labels: ['SBUX', 'FB', 'AMZN'],
        datasets: [
          {
            label: 'stock #',
            data: [1500.65, 3200.75, 2300.2],
            backgroundColor: [
              'rgb(77,155,123)',
              'rgb(123,149,201)',
              'rgb(96,193,235)',            
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return (
        <div>
            <Doughnut 
                data = {data}
            />
        </div>
        
    )
}

export default BarGraph;
