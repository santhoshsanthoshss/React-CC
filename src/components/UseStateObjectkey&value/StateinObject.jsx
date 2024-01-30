import React, { useState } from "react";

const StateinObject = () => {
  // ! normal way
  //   const [fullname, setfullname] = useState({
  //     firstName: "syed",
  //     lastName: "Imran",
  //   });

  //   let updateFirst = () => {
  //     setfullname({ ...fullname, firstName: "ram" }); //! here we destructing because we want both and lastname
  //   };

  //   let updateLast = () => {
  //     setfullname({ ...fullname, lastName: "kishore" });

  // ! Other Way

  const [fullname, setfullname] = useState({
    firstName: "syed",
    lastName: "Imran",
  });

  let updateFirst = () => {
    fullname.firstName = "santhosh";
    setfullname({ ...fullname });
  };
  let updateLast = () => {
    setfullname({ ...fullname, lastName: "k" });
  };
  return (
    <div>
      <h1>{JSON.stringify(fullname)}</h1>
      <button onClick={updateFirst}>Firstname</button>
      <button onClick={updateLast}>Lastname</button>
    </div>
  );
};
export default StateinObject;
