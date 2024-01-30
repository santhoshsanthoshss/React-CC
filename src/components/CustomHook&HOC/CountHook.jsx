import React, { useState } from "react";
// ! higher order function
function CountHook(OriginalComponent, C) {
  function NewComponent() {
    const [count, setcount] = useState(0);
    let increment = () => {
      setcount(count + C);
    };
    let decrement = () => {
      setcount(count - C);
    };
    return (
      <OriginalComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  }

  return NewComponent;
}

export default CountHook;
