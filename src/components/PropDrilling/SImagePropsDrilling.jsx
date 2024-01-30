import React, { createContext, useContext } from "react";
import { EmployeeContext, StudentContext } from "./PropDrilling";

function SImagePropsDrilling() {
  let image = useContext(StudentContext);
  let edata = useContext(EmployeeContext);
  //   return (
  //     <div>
  //       <StudentContext.Consumer>
  //         {({ imgUrl }) => {
  //           return (
  //             <EmployeeContext.Consumer>
  //               {(edata) => {
  //                 return (
  //                   <div>
  //                     <img src={imgUrl} alt="" />
  //                     <h1>{edata}</h1>
  //                   </div>
  //                 );
  //               }}
  //             </EmployeeContext.Consumer>
  //           );
  //         }}
  //       </StudentContext.Consumer>
  //     </div>
  //   );
  return (
    <div>
      <img src={image.imgUrl} alt="" />
      <h1>{edata}</h1>
    </div>
  );
}

export default SImagePropsDrilling;
