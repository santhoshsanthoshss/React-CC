import React from "react";

const CondtionalRendering = () => {
  //   let day = "Monday";
  //   if (day === "Sunday") {
  //     return <h1>Holiday</h1>;
  //   } else if (day === "Monday") {
  //     return <h1>Working Day</h1>;
  //   }
  return (
    <div>
      {/* {day === "Monday" ? <h1>Holiday</h1> : <h1>No Data Match</h1>} */}
      {/* {day === "Monday" && <h1>Monday is Working day</h1>} */}
      {/* {day === "sunday" || <h1>Monday is Working day</h1>}  > h1 will not print it work , if day is monday it will not print h1 , if the day is any other day it will print the h1 */}

      <h1>Iam Conditional Rending </h1>
    </div>
  );
};

export default CondtionalRendering;
