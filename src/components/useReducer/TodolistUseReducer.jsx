import React, { useReducer, useState } from "react";

let inital = [];

let reducerftn = (current, action) => {
  switch (action.type) {
    case "senddata":
      return [...current, action.payload];
    case "delete":
      return current.filter((ele, ind) => {
        return ind !== action.payload;
      });
    default:
      return current;
  }
};
const TodolistUseReducer = () => {
  const [target, settarget] = useState("");
  let fliterddata = ({ target: { value } }) => {
    settarget(value);
  };
  let [state, dispatch] = useReducer(reducerftn, inital);
  return (
    <div>
      <input type="text" placeholder="Add Task" onChange={fliterddata} />

      <button
        onClick={() => {
          dispatch({ type: "senddata", payload: target });
        }}
      >
        Add
      </button>
      <div>
        {state.map((element, ind) => {
          return (
            <div>
              <span>{element}</span>
              {element && (
                <button
                  onClick={() => {
                    dispatch({ type: "delete", payload: ind });
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodolistUseReducer;
