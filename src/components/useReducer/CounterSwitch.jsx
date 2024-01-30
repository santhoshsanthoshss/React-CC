import React, { useReducer } from "react";

export const CounterSwitch = () => {
  let [count, dispatch] = useReducer((current, action) => {
    switch (action) {
      case "increment":
        return current + 1;
      case "decrement":
        return current - 1;
      default:
        return current;
    }
  }, 0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        -
      </button>
    </div>
  );
};
