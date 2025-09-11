import { useState } from "react";

const Counter = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);

  function increment() {
    console.log(count);
    // count = count + 1;
    setCount((prev) => {
      console.log(prev);
      return (prev = prev + 1);
    });
    // setCount((prev) => {
    //   return (prev = prev + 1);
    // });
    // setCount((prev) => {
    //   return (prev = prev + 1);
    // });
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  function decrement() {
    console.log(count);
    setCount(count - 1);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
