import React, { useReducer } from "react";
let initalstate = {
  count1: 0,
  count2: 0,
};
let countreducer = (current, action) => {
  switch (action) {
    case "increment":
      return { ...current, count1: current.count1 + 1 };
    case "decrement":
      return { ...current, count1: current.count1 - 1 };
    case "reset":
      return initalstate;
    default:
      return current;
  }
  //   return current;
};
const CounterPreviousValue = () => {
  let [state, dispatch] = useReducer(countreducer, initalstate);
  return (
    <div>
      <h1>Count:{state.count1}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        dec
      </button>
      <br />
      <hr />
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        res
      </button>
    </div>
  );
};

export default CounterPreviousValue;
