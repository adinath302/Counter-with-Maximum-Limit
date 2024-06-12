import React, { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);

  const Increment = () => {
    if (Count < 10) {
      setCount(Count + 1);
    }
  };

  const Decrement = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };

  return (
    <>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <div>{Count}</div>
    </>
  );
}

export default Counter;
