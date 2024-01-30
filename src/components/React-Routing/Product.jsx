import React from "react";
import NavBar from "./NavBar";
import styleBar from "../../CSS/Bar.module.css";
import { Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <NavBar
        navElement={{
          key1: "Mobile",
          key2: "Watch",
          key3: "Television",
          key4: "Signup",
        }}
        navLink={{
          url1: "mobile",
          url2: "watch",
          url3: "television",
          url4: "signup",
        }}
        className={styleBar.navabar_main1}
        alterClass={styleBar.hyper_main1}
      />

      <div
        style={{
          border: "1px solid red",
          margin: "50px auto",
          width: "500px",
          height: "400px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
