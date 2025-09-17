import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const memorizedIncrement = useCallback(increment, [count]);

  return (
    <div>
      <p>This is a Parent component</p>
      <Child increment={memorizedIncrement} count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
