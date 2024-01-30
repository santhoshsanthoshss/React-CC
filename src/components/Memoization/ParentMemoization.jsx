import React, { useState } from "react";
import ChildOneMemoization from "./ChildOneMemoization";
import ChildTwoMemoization from "./ChildTwoMemoization";

const ParentMemoization = () => {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  let updateCounter = () => {
    setcount(count + 1);
  };
  let updateCounter1 = () => {
    setcount1(count1 + 1);
  };
  console.log("parent");
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }} onClick={updateCounter}>
        count:{count}
      </h1>
      <h1 style={{ backgroundColor: "green" }} onClick={updateCounter1}>
        count1:{count1}
      </h1>
      <ChildOneMemoization count={count} />
      <br />
      <hr />
      <ChildTwoMemoization count1={count1} />
    </div>
  );
};

export default ParentMemoization;
