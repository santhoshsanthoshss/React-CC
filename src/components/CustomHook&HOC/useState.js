import React, { useState } from "react";

function useCounter1(c) {
  const [count, setcount] = useState(0);
  let increment = () => {
    setcount(count + c);
  };
  let decrement = () => {
    setcount(count - c);
  };
  return { count, increment, decrement };
}

export { useCounter1 }; //! we need to use name export and import
