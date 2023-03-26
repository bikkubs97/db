import React from "react"
import Chart from 'react-google-charts'



const graphData = JSON.parse(localStorage.getItem('graphData'))
const filteredData = graphData.filter(row => (
  row.topic.trim() !== '' 
 
))


const intensityLikeData = filteredData.reduce((acc, row) => {
  const topic = row.topic
  const likelihood = row.likelihood

  // Check if sector already exists in the accumulator
  const existingTopic = acc.find(item => item[0] === topic)
  if (existingTopic) {
    // If sector exists, add intensity to existing value
    existingTopic[1] += likelihood
  } else {
    // If sector does not exist, add new entry to accumulator
    acc.push([topic, likelihood])
  }

  return acc;
}, []);

export default function Like() {
  return (
    <div id="like">
    <Chart 
  width={'100%'}
  height={'600px'}
  chartType="BarChart"
  data={[    ['Pestle', 'Likelihood', { role: 'style' }],
    ...intensityLikeData.map(([pestle, likelihood]) => [pestle, likelihood, 'color: purple'])
  ]}
  options={{
    title: 'Pestle and likelihood',
    legend: { position: 'none' },
    hAxis: { title: 'Likelihood' },
    vAxis: { title: 'pestle' },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>

  );
}
