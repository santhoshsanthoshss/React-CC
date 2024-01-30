import React from "react";
import Cars from "../Images/pexels-denniz-futalan-3378437.jpg";
// import "../CSS/Car.css";
import carstyle from "../CSS/Car.module.css";
const Car = () => {
  return (
    <div className="hole_bike">
      <h2 className="bikeheading">Car</h2>
      <img className={carstyle.br} src={Cars} alt="" />
    </div>
  );
};
export default Car;
