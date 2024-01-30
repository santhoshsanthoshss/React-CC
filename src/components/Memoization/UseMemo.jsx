import React, { useMemo, useState } from "react";
import ChildTwoMemoization from "./ChildTwoMemoization";
import ChildOneMemoization from "./ChildOneMemoization";

const UseMemo = () => {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  let updateCounter = () => {
    setcount(count + 1);
  };
  let updateCounter1 = () => {
    setcount1(count1 + 1);
  };

  let iseven = useMemo(() => {
    console.log("is even called");
    for (let i = 1; i <= 3000000000; i++) {}
    return count % 2 === 0;
  }, [count]);

  console.log("parent");
  return (
    <div>
      <div>
        <h1 style={{ backgroundColor: "red" }} onClick={updateCounter}>
          count:{count} {iseven ? "add" : "even"}
        </h1>
        <h1 style={{ backgroundColor: "orange" }} onClick={updateCounter1}>
          count1:{count1}
        </h1>
        <ChildOneMemoization count={count} />
        <br />
        <hr />
        <ChildTwoMemoization count1={count1} />
      </div>
    </div>
  );
};

export default UseMemo;
