import React from "react";
import { useNavigate } from "react-router-dom";
let LoginNavigate = () => {
  let productNavigate = useNavigate();

  let loginSubmit = (e) => {
    console.log("Form submitted");
    productNavigate("/product");
  };
  return (
    <div>
      <form onSubmit={loginSubmit}>
        <input type="text" placeholder="Enter the userName" />
        <br />
        <input type="password" placeholder="Enter the password" />
        <br />
        <hr />
        <button type="sumbit">Login</button>
      </form>
    </div>
  );
};

export default LoginNavigate;
