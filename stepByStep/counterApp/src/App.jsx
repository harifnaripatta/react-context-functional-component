import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-wrapper">
      <div className="counter-container">
        <h2>{count}</h2>
        <div className="counter-buttons">
          <button onClick={increment} className="counter-button increment ">
            Increment
          </button>
          <button onClick={decrement} className="counter-button decrement">
            Decrement
          </button>
          <button onClick={reset} className="counter-button reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
