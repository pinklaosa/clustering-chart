import React, { useRef, useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";

const ScatterPlot = (props) => {
  const { series } = props;
  let chartRef = useRef();
  let options = {
    xAxis: {
      // scale: true,
    },
    yAxis: {
      // scale: true,
    },
    dataZoom: [
      {
        xAxisIndex: 0,
      },
    ],
    series: [
      {
        type: "scatter",
        symbolSize: 20,
        data: series,
      },
      {
        type: "custom",
        renderItem: function (params, api) {
          let [x, y] = api.coord([783, 183.33]);
          return {
            type: "circle",
            x,
            y,
            z: 100,
            shape: {
              cx: 0,
              cy: 0,
              r: 50,
            },
            style: {
              // text: "value",
              // fontSize: 24,
              fill: "black",
              stroke: "black",
              // lineWidth: 1,
            },
            // draggable: true,
            // textConfig: {
            //   local: true,
            // },
          };
        },
      },
    ],
  };

  // useEffect(() => {
  //   if (chartRef.current) {
  //     let chart = chartRef.current.getEchartsInstance();
  //     let options = {
  //       xAxis: {},
  //       yAxis: {},
  //       dataZoom: [
  //         {
  //           xAxisIndex: 0,
  //         },
  //       ],
  //       series: [
  //         {
  //           type: "scatter",
  //           symbolSize: 20,
  //           data: series,
  //         },
  //         {
  //           type: "custom",
  //           renderItem: function (params, api) {
  //             let [x, y] = api.coord([783, 183.33]);
  //             return {
  //               type: "circle",
  //               x,
  //               y,
  //               z: 100,
  //               shape: {
  //                 cx: 0,
  //                 cy: 0,
  //                 r: 50,
  //               },
  //               style: {
  //                 // text: "value",
  //                 // fontSize: 24,
  //                 fill: "black",
  //                 stroke: "black",
  //                 // lineWidth: 1,
  //               },
  //               // draggable: true,
  //               // textConfig: {
  //               //   local: true,
  //               // },
  //             };
  //           },
  //         },
  //       ],
  //     };

  //     chart.setOption(options);

  //     const coordinateSystem = chart
  //       .getModel()
  //       .getSeriesByIndex(0).coordinateSystem;

  //     // console.log("coordinateSystem ", coordinateSystem);
  //     const point = coordinateSystem.dataToPoint([6, 8]);
  //     // console.log("point ", point);

  //     // options.series.push({
  //     //   type: "custom",
  //     //   xAxisIndex: 0,
  //     //   renderItem: function (params, api) {
  //     //     let [x, y] = api.coord(point);
  //     //     console.log("x,y ", x, y);
  //     //     return {
  //     //       type: "text",
  //     //       x,
  //     //       y,
  //     //       z: 100,
  //     //       style: {
  //     //         text: "value",
  //     //         fontSize: 24,
  //     //         fill: "black",
  //     //         stroke: "black",
  //     //         lineWidth: 1,
  //     //       },
  //     //       draggable: true,
  //     //       textConfig: {
  //     //         local: true,
  //     //       },
  //     //     };
  //     //   },
  //     // });

  //     // options.graphic = {
  //     //   type: "circle",
  //     //   position: chart.convertToPixel('grid', point),
  //     //   z: 100,
  //     //   // rotation: -45,
  //     //   shape: {
  //     //     cx: 0,
  //     //     cy: 0,
  //     //     r: 100,
  //     //   },
  //     //   style: {
  //     //     fill: "blue",
  //     //     stroke: "#000",
  //     //     opacity: 0.2,
  //     //     lineWidth: 1,
  //     //   },
  //     // };

  //     // console.log("options ", options);
  //     // chart.setOption(options);
  //   }
  // }, [chartRef, series]);

  return (
    <EChartsReact
      ref={chartRef}
      option={options}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default ScatterPlot;
