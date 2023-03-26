import React from "react";
import Chart from 'react-google-charts';





export default function Intesnsity() {
  const graphData = JSON.parse(localStorage.getItem('graphData'));
const filteredData = graphData.filter(row => row.sector.trim() !== '');

const intensityChartData = filteredData.reduce((acc, row) => {
  const sector = row.sector;
  const intensity = row.intensity;


  const existingSector = acc.find(item => item[0] === sector);
  if (existingSector) {
    
    existingSector[1] += intensity;
  } else {
   
    acc.push([sector, intensity]);
  }

  return acc;
}, []);
  return (
   <Chart className="intensity"
      width={'550px'}
      height={'500px'}
      chartType="PieChart"
      data={[
        ['Sector', 'Intensity'], ...intensityChartData
      ]}
      options={{
        title: 'Sector and Intensity',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}
