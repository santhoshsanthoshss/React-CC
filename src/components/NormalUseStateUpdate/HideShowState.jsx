import React from "react";
import { useState } from "react";

const HideShowState = () => {
  let [count, setCount] = useState(0);

  let updatebtn = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  };

  let updatfive = () => {
    setCount(5);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={updatebtn}>Update</button>
      <button onClick={updatfive}>Update5</button>
    </div>
  );
};

export default HideShowState;
