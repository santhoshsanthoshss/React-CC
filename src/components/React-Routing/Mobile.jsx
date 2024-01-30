import React from "react";
import Mobiledata from "../React-Routing/Mobiledata.js";
import styleBar from "../../CSS/Bar.module.css";

import { Link } from "react-router-dom";
const Mobile = () => {
  return (
    <div className={styleBar.card}>
      {Mobiledata.map(({ id, name, image, price }) => {
        return (
          <Link to={`/product/mobile/${id}`} key={id}>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Mobile;
