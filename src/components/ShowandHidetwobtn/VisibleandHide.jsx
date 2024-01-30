import React, { useState } from "react";
import ImageUrl from "../../Images/pexels-christian-1164778.jpg";
const VisibleandHide = () => {
  const [dispaly, setdispaly] = useState(true);
  let hidebtn = () => {
    setdispaly(false);
  };
  let showbtn = () => {
    setdispaly(true);
  };
  return (
    <div>
      {dispaly && <img src={ImageUrl} height="300px" width="400px" alt="" />}
      <button onClick={hidebtn}>Hide</button>
      <button onClick={showbtn}>Show</button>
    </div>
  );
};

export default VisibleandHide;
