import React, { useState } from "react";

const CounterandUpdate = () => {
  const [count, setcount] = useState(0);

  let updateCount = () => {
    // ! State update only onces if we call mutiple times also
    // setcount(count + 1);
    // setcount(count + 1);
    // setcount(count + 1);
    // setcount(count + 1);
    // setcount(count + 1);
    // ! use setcount updated function , inside the callback function
    // ! initally state will be in 0
    // ! to execute multiple update function , but it is not good practice for that we use for loop
    // setcount((previousState) => {
    //   return previousState + 1;
    // });
    // setcount((previousState) => {
    //     return previousState + 1;
    //   });

    // ! we need to use forloop
    for (let i = 1; i <= 5; i++) {
      setcount((previousState) => {
        return previousState + 1;
      });
    }

    // ! State is ansyncrous
    // setcount(count + 1);
    // console.log(count); // initazile count start from 0
    // console.log(count + 1);
    console.log("start");
    setcount((ps) => {
      // console.log("set state");   //& set state will print last,because it is ansyncrous
      return ps + 1;
    });
    console.log("end");
  };
  return (
    <div>
      <h1> Counter:{count}</h1>
      <button onClick={updateCount}>Count</button>
    </div>
  );
};

export default CounterandUpdate;
