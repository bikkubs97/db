import React from "react";
import Chart from 'react-google-charts';


const graphData = JSON.parse(localStorage.getItem('graphData'))
const lineGraph = graphData.map(item => [new Date(item.published).getFullYear(),  item.intensity])



export default function Year() {
  
  return (
    <div id="year">
    <Chart 
    className="line"
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[ ['year', 'intensity'], ...lineGraph ]}
    options={{
      title: 'Year',
      curveType: 'function',
      legend: { position: 'bottom' },
      vAxis: { viewWindow: { min: 0, max: 80 } },
      hAxis:{ viewWindow: { min: 1970, max: 2010 } }
    }}
    rootProps={{ 'data-testid': '1' }}
  />
  </div>
  
);

  
}

