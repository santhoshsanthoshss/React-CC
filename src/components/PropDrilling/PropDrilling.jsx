import React, { createContext } from "react";
import USERS from "../../userdata";
import StudentPropDrilling from "./StudentPropDrilling";
export let StudentContext = createContext();
export let EmployeeContext = createContext("Good Employee");
export const PropDrilling = () => {
  return (
    <div>
      {USERS.map(({ id, sname, imgUrl }) => {
        return (
          <StudentContext.Provider key={id} value={{ sname, imgUrl }}>
            <StudentPropDrilling />
          </StudentContext.Provider>
        );
      })}
    </div>
  );
};
