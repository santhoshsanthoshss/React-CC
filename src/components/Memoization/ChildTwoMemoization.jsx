import React from "react";

const ChildTwoMemoization = () => {
  console.log("child two");
  return <div></div>;
};

export default React.memo(ChildTwoMemoization);
