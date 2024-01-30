import React, { useState } from "react";
import ImageUrl from "../../Images/pexels-denniz-futalan-3378437.jpg";

const Singlebtn = () => {
  const [count, setcount] = useState(true);
  let hideshow = () => {
    setcount(!count);
  };
  return (
    <div>
      {count && <img src={ImageUrl} width="300px" height="300px" alt="" />}
      <button onClick={hideshow}>{count ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Singlebtn;
