import { Wheel } from "react-custom-roulette";
import { data } from "./data";
import "./App.scss";
import { useState } from "react";

function App() {
  const [spin, setSpin] = useState<boolean>(false);
  const [random, setRandom] = useState<number>(0);

  const handleSpin = () => {
    setRandom(Math.floor(Math.random() * 3));
    setSpin(true);
    setTimeout(() => setSpin(false), 1000);
  };

  return (
    <div className="App">
      <span className="App-title">c ki ki review ma pr??</span>
      <button className="App-button" onClick={() => handleSpin()}>
        tente ta chance
      </button>
      <Wheel mustStartSpinning={spin} prizeNumber={random} data={data} />
    </div>
  );
}

export default App;
