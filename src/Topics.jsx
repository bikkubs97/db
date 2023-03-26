import React from "react";
import Chart from "react-google-charts";


const graphData = JSON.parse(localStorage.getItem('graphData'))
const filteredData = graphData.filter(row => (
  row.topic.trim() !== '' 
 
))

const bubbleChartData = filteredData.map(item => [item.topic, item.relevance, item.intensity]);

const BubbleChart = () => (
  <Chart className="topic"
    chartType="BubbleChart"
    width="100%"
    height="400px"
    data={[['topic', 'relevance', 'intensity'], ...bubbleChartData]}
    options={options}
  />
);

const options = {
  title: "Correlation between Relevance intensity and Topics",
  hAxis: { 
    title: "Relevance",
    titleTextStyle: { fontSize: 16 }, 
    textStyle: { fontSize: 12 } 
  },
  vAxis: { title: "Intensity" },
  bubble: {
    textStyle: { fontSize: 11 },
    opacity: 0.7,
    stroke: '#fff',
    color: '#800080'
  },
  sizeAxis: { maxSize: 20 },
  colors: ['#EE82EE'], 
}


export default function Topics() {
  return (
    
      <BubbleChart id="topic"  />
   
  );
}
