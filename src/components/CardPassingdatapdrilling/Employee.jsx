import React from "react";
import Single from "./SingleStudent";
import USERS from "../../userdata";
export const Employee = () => {
  return (
    <div className="app">
      {USERS.map(({ id, sname, imgUrl, age }) => {
        return <Single key={id} sname={sname} imgUrl={imgUrl} age={age} />;
      })}
      {/* <Bikes />
  <Cars />*/}
    </div>
  );
};

Employee.defaultProps = {
  id: "No Name Found!!",
  imgUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
  age: "no age",
};
