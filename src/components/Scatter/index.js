import { useMemo } from "react";
import ScatterPlot from "./ScatterPlot";

const Scatter = (props) => {
  let { centerPoint, data } = props;
  centerPoint = [8.0];
  data = [
    [6, 8],
    [8.0, 7],
    [13.0, 7.58],
    [9.0, 8.81],
    [11.0, 8.33],
    [14.0, 9.96],
    [6.0, 7.24],
    [4.0, 4.26],
    [12.0, 10.84],
    [7.0, 4.82],
    [5.0, 5.68],
  ];
  //   [
  //     29440.59502222222,
  //     -12828.333333333332
  // ]
  // let graphic = useMemo(() => {
  //   if (centerPoint.length < 0 && !data) {
  //     return [];
  //   }
  //   let graphic = centerPoint.map((c) => {
  //     let dataIndex = data.findIndex((d) => d[0] === c);
  //     let top = "auto";
  //     let left = "auto";
  //     return {
  //       type: "ellipse",
  //       x: 783.3,
  //       y: 183.3,
  //       z: 100,
  //       rotation: -45,
  //       shape: {
  //         cx: 0,
  //         cy: 0,
  //         rx: 100,
  //         ry: 200,
  //       },
  //       style: {
  //         fill: "blue",
  //         stroke: "#000",
  //         opacity: 0.2,
  //         lineWidth: 1,
  //       },
  //     };
  //   });
  //   return graphic;
  // }, [centerPoint, data]);

  return <ScatterPlot series={data} />;
};

export default Scatter;
