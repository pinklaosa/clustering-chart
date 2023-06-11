import EChartsReact from "echarts-for-react";
import { useMemo } from "react";

const Clustering = (props) => {
  const { series } = props;

  const yAxis = useMemo(() => {
    return Object.keys(series)
      .slice(1)
      .map((_, index) => {
        return {
          // offset: -15 * index,
          triggerEvent: true,
        };
      });
  }, [series]);

  let options = {
    dataset: {
      source: series,
    },
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: 0,
        yAxisIndex: 0,
      },
    ],
    xAxis: {
      type:"category",
    },
    yAxis,
    series: [
      ...Object.keys(series)
        .slice(1)
        .map((_, index) => {
          return {
            emphasis: {
              disabled: false,
              focus: "series",
            },
            type: "scatter",
            yAxisIndex: index,
          };
        }),
      {
        type: "custom",
        yAxisIndex: 0,
        renderItem(params, api) {
          let [x, y] = api.coord([20, 0.48]);
          return {
            type: "ellipse",
            x,
            y,
            z: 100,
            rotation: -45,
            shape: {
              cx: 0,
              cy: 0,
              rx: 150,
              ry: 200,
            },
            style: {
              // text: value,
              // fontSize: 24,
              fill: "blue",
              stroke: "#000",
              opacity: 0.01,
              // lineWidth: 1,
              // stroke: "black",
              // lineWidth: 1,
            },
            draggable: true,
            // textConfig: {
            //   local: true,
            // },
          };
        },
      },
    ],
    legend: {
      show: true,
    },
  };

  return (
    <EChartsReact option={options} style={{ width: "100%", height: "800px" }} />
  );
};
export default Clustering;
