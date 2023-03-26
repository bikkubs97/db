import React from "react";
import Chart from "react-google-charts";


export default function ScatterChart() {
  const graphData = JSON.parse(localStorage.getItem("graphData"));

const scatterChartData = graphData.map((item) => [item.region, item.intensity, item.relevance]);

  return (
    <div className="region">
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
