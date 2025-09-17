import React from "react";

const Child = ({ increment, count, setCount }) => {
  const reset = () => {
    // reset the count
    // count = 0;
    setCount(0);
  };

  return (
    <div>
      <p>This is a child component</p>
      <h2>Count : {count}</h2>
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Child;
