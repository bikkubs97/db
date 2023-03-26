import React from "react";
import Chart from 'react-google-charts';
import { useContext } from "react";
import { graphContext } from "./App";




export default function Year() {
  const graphData = useContext(graphContext)
const lineGraph = graphData.map(item => [new Date(item.published).getFullYear(),  item.intensity])

  
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

