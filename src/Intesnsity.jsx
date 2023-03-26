import React from "react";
import Chart from 'react-google-charts';

const graphData = JSON.parse(localStorage.getItem('graphData'));
const filteredData = graphData.filter(row => row.sector.trim() !== '');

const intensityChartData = filteredData.reduce((acc, row) => {
  const sector = row.sector;
  const intensity = row.intensity;

  // Check if sector already exists in the accumulator
  const existingSector = acc.find(item => item[0] === sector);
  if (existingSector) {
    // If sector exists, add intensity to existing value
    existingSector[1] += intensity;
  } else {
    // If sector does not exist, add new entry to accumulator
    acc.push([sector, intensity]);
  }

  return acc;
}, []);



export default function Intesnsity() {
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
