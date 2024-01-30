import React from "react";
// import CountHook from "./CountHook";
import { func } from "prop-types";
import { useCounter1 } from "./useState";

// ! Higher order function
// function CounterTwo({ count, increment, decrement }) {
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

//! using custom hook
function CounterTwo() {
  let { count, increment, decrement } = useCounter1(1);

  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// export default CountHook(CounterTwo, 3); //! higher order function

export default CounterTwo;
