// import React, { useRef, useEffect } from "react";
import EChartsReact from "echarts-for-react";

const Scatter = () => {
  // const chartRef = useRef();
  let options = {
    xAxis: {},
    yAxis: {},
    graphic: [
      {
        type: "ellipse",
        left: "center",
        top: 50,
        z: 100,
        rotation: -45,
        shape: {
          cx: 30,
          cy: 50,
          rx: 100,
          ry: 200,
        },
        style: {
          fill: "blue",
          stroke: "#000",
          opacity: 0.2,
          lineWidth: 1,
        },
      },
    ],
    series: [
      {
        type: "scatter",
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68],
        ],
      },
    ],
  };
  
  return (
    <EChartsReact option={options} style={{ width: "100%", height: "500px" }} />
  );
};

export default Scatter;
