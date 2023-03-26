import React from "react";
import Chart from "react-google-charts";

const graphData = JSON.parse(localStorage.getItem("graphData"));

const scatterChartData = graphData.map((item) => [item.region, item.intensity, item.relevance]);

export default function ScatterChart() {
  return (
    <div id="region">
    <Chart 
      chartType="ScatterChart"
      width="100%"
      height="600px"
      data={[
        ["Region", "Relevance", "Intensity"],
        ...scatterChartData,
      ]}
      options={{
        title: "Correlation between Region, Relevance and Intensity",
        hAxis: {
          title: "Region",
        },
        vAxis: {
          title: "Relevance",
        },
        legend: {
          position: "none",
        },
      }}
    />
    </div>
  );
}
