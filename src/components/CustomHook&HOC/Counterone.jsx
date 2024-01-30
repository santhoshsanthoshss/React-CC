import React, { useState } from "react";
import { useCounter1 } from "./useState";
// import CountHook from "./CountHook";

// ! using the higher order function
// function Counterone({ count, increment, decrement }) {
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// ! using the custom hook
function Counterone() {
  //   let { count, increment, decrement } = useCounter1(2);
  let props = useCounter1(2);
  return (
    <div>
      <h1>count:{props.count}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

// export default CountHook(Counterone, 2); //! Higher order components
export default Counterone;
