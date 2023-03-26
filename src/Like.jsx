import React from "react"
import Chart from 'react-google-charts'
import { useContext } from "react"
import { graphContext } from "./App"




export default function Like() {

  const graphData = useContext(graphContext)
 const filteredData = graphData.filter(row => (
  row.topic.trim() !== '' 
 
))


const intensityLikeData = filteredData.reduce((acc, row) => {
  const topic = row.topic
  const likelihood = row.likelihood


  const existingTopic = acc.find(item => item[0] === topic)
  if (existingTopic) {

    existingTopic[1] += likelihood
  } else {
 
    acc.push([topic, likelihood])
  }

  return acc;
}, []);
  return (
    <Chart className="like"
  width={'100%'}
  height={'600px'}
  chartType="BarChart"
  data={[    ['Pestle', 'Likelihood', { role: 'style' }],
    ...intensityLikeData.map(([topic, likelihood]) => [topic, likelihood, 'color: purple'])
  ]}
  options={{
    title: 'Pestle and likelihood',
    legend: { position: 'none' },
    hAxis: { title: 'Likelihood' },
    vAxis: { title: 'Topic' },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

  );
}
