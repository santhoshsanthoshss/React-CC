import React from "react";
import { useParams } from "react-router-dom";
import Mobiledata from "./Mobiledata";

const MobileDetails = () => {
  let { mobileid } = useParams();
  console.log(mobileid);
  let mobiles = Mobiledata.find(({ id }) => {
    return parseInt(mobileid) === id;
  });

  return (
    <div>
      <img src={mobiles.image} alt="" />
      <h1>{mobiles.name}</h1>
      <h2>{mobiles.price}</h2>
      <h2>{mobiles.ram}</h2>
      <h2>{mobiles.display}</h2>
    </div>
  );
};

export default MobileDetails;
