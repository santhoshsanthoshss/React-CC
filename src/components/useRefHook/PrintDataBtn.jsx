import React, { useRef } from "react";

const PrintDataBtn = () => {
  let btnuser = useRef(null);
  console.log(btnuser);
  let clickedbtn = () => {
    // console.log(btnuser.current);
    btnuser.current.style.display = "none";
    window.print();
    btnuser.current.style.display = "block";
  };
  return (
    <div>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      {/* <input type="text" placeholder='Enter the data' /> */}
      <button onClick={clickedbtn} ref={btnuser}>
        click
      </button>
    </div>
  );
};

export default PrintDataBtn;
