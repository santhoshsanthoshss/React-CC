import React, { useReducer } from "react";

const CounterUseReduer = () => {
  // ! it return one that array have 2 argument cuurentstate, second arg dispatch function
  // ! when we call or invoke the dispatch function the usereducer function will execute
  // ! usereducer function acccept two argument 1 arg callback function and initalstate ,that accept 2 arg first is cuurent state, second action

  let [count, dispatch] = useReducer((current, action) => {
    if (action === "increment") {
      return current + 1;
    } else if (action === "decrement") {
      return current - 1;
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

export default CounterUseReduer;
