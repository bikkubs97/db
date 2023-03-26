import React from "react";
import Chart from "react-google-charts";




export default function Country() {

  const graphData = JSON.parse(localStorage.getItem('graphData'))

//filered 
const filteredData = graphData.filter(row => (
  row.country.trim() !== '' 
 
))
const countryChart = filteredData.map(item => [item.country, item.intensity]);

   
  return (
   
  <div id="country">
 
<Chart
  width={'600px'}
  height={'500px'}
  chartType="GeoChart"
  data={[['Country', 'Intensity'], ...countryChart]}
  options={{
    title: 'Countries-Intensity',
    colorAxis: { colors: ['#d4b4dd', '#c397d8', '#a76dc7', '#7a3f98'],
    minValue: 0,
    maxValue: 12,
  
  },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

  </div>
 
  )
}
