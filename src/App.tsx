import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { data } from "./data";
import "./App.scss";

const App = () => {
  const [spin, setSpin] = useState<boolean>(false);
  const [random, setRandom] = useState<number>(0);

  const handleSpin = () => {
    if (!spin) {
      setRandom(Math.floor(Math.random() * data.length));
      setSpin(true);
      setTimeout(() => setSpin(false), 11500);
    }
  };

  return (
    <div className="App">
      <span className="App-title">c ki ki review ma pr??</span>
      <button
        className={`App-button ${!spin ? "" : "disable"}`}
        onClick={() => handleSpin()}
      >
        tente ta chance
      </button>
      <Wheel mustStartSpinning={spin} prizeNumber={random} data={data} />
    </div>
  );
};

export default App;
