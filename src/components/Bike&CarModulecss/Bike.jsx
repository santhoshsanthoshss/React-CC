import React from "react";
import bikes from "../Images/pexels-christian-1164778.jpg";
// import "../CSS/Bike.css";
import Bikestyle from "../CSS/Bike.module.css";

const Bike = () => {
  return (
    <div className="hole_bike">
      <h2 className="bikeheading">Bike</h2>
      {/* <img className="bikes_img br" src={bikes} alt="" /> */}
      <img className={Bikestyle.br} src={bikes} alt="" />
    </div>
  );
};

export default Bike;
