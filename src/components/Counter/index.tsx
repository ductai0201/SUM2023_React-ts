import { CounterContext } from "@/context/Counter";
import React, { useContext, useReducer } from "react";
import { Button } from "..";

const Counter = () => {
  const { count,increment, decrement } = useContext(CounterContext);
  return (
    <div>
      Counter: {count}
      <Button type="primary" onClick={() => increment({ type: "INCREMENT" })}>
        Increment
      </Button>
      <Button type="primary" onClick={() => decrement({ type: "DECREMENT" })}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
