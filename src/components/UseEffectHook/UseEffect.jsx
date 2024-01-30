import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  const [sname, setsname] = useState("miller");
  useEffect(() => {
    // document.body.style.backgroundColor = "green";
    console.log("hello1");
    // return () => {
    //   // document.body.style.backgroundColor = "red";
    //   console.log("Event Executed");
    // };
  }, [sname]);
  // useEffect(() => {
  //   console.log("chname");
  // }, [sname]);

  let updateuser = () => {
    setcount(count + 1);
  };

  let changename = () => {
    setsname("santhosh");
    // console.log("name change");
  };

  let updatecount1 = () => {
    setcount1(count1 + 1);
  };
  // console.log("render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={updateuser}>Add</button>
      <br />
      <hr />
      <h1>Count1: {count1}</h1>
      <button onClick={updatecount1}>ADD</button> <br /> <hr />
      <br />
      <hr />
      <h1>Name: {sname}</h1>
      <button onClick={changename}>changename</button> <br /> <hr />
    </div>
  );
};

export default UseEffect;
