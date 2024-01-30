import React from "react";

const ChildOneMemoization = () => {
  console.log("child one render");
  return <div></div>;
};

export default React.memo(ChildOneMemoization);
