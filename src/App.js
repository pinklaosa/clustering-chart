// import logo from "./logo.svg";
import "./App.css";
// import Scatter from "./components/Scatter";
import { useMemo } from "react";
import { generateRandomSeries, generateSequence } from "./utils/data_generator";
import Clustering from "./components/Clustering";

const seriesConfigs = {
  seriesA: {},
  seriesB: { min: 10, max: 15 },
};

function App() {
  let series = useMemo(() => {
    let temp = {
      index: generateSequence(),
    };
    for (let [key, value] of Object.entries(seriesConfigs)) {
      temp[key] = generateRandomSeries(value);
    }
    // console.log(temp);
    return temp;
  }, []);

  return (
    <div className="App">
      <h1>Hello </h1>
      <Clustering series={series} />
      {/* <Scatter /> */}
      {/* <Scatter /> */}
    </div>
  );
}

export default App;
