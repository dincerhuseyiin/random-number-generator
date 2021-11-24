import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [random, setRandom] = useState(0);

  const handleClick = () => {
    setRandom(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="App">
      <Main
        handleClick={handleClick}
        minVal={minVal}
        setMinVal={setMinVal}
        maxVal={maxVal}
        setMaxVal={setMaxVal}
        random={random}
        setRandom={setRandom}
      />
    </div>
  );
}

export default App;
