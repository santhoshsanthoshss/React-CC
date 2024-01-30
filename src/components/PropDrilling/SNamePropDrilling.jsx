import React, { useContext } from "react";
import { StudentContext } from "./PropDrilling";
const SNamePropDrilling = () => {
  let ename = useContext(StudentContext);
  // return (
  //   <div>
  //     <StudentContext.Consumer>
  //       {({ sname }) => {
  //         return (
  //           <div>
  //             <h2>{sname}</h2>
  //           </div>
  //         );
  //       }}
  //     </StudentContext.Consumer>
  //   </div>
  // );
  return <h1>{ename.sname}</h1>;
};

export default SNamePropDrilling;
