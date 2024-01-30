import React from "react";
import Child from "./Child";
const Parent = () => {
  //  Passing child to Parent

  let userDatas = (cData) => {
    console.log(cData);
  };

  //   ----------------------
  let name = "John";

  return (
    <div>
      {/* & Passing data parent to child component */}
      <Child name={name} getData={userDatas} />
    </div>
  );
};
export default Parent;
