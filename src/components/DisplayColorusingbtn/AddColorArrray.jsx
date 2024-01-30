import { element } from "prop-types";
import React from "react";
import { useState } from "react";

const AddColorArrray = () => {
  const [addcolor, setaddcolor] = useState([]);
  let Color = ["red", "blue", "green", "orange"];

  let updateColor = () => {
    let userupdate = [...addcolor, Color(addcolor.length)];
    setaddcolor(userupdate);
  };

  return (
    <div>
      <button onClick={updateColor}>Add Color</button>
      {addcolor.map((color, index) => {
        return <h1 key={index}>{color}</h1>;
      })}
    </div>
  );
};

export default AddColorArrray;
