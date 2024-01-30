import React from "react";
import { useParams } from "react-router-dom";
import WatchData from "./Watchdata";

const WatchDetails = () => {
  let { watchid } = useParams();
  console.log(watchid);
  let watches = WatchData.find(({ id }) => {
    return parseInt(watchid) === id;
  });
  return (
    <div>
      <img src={watches.image} alt="" />
      <h1>{watches.name}</h1>
      <h2>{watches.price}</h2>
      <h2>{watches.color}</h2>
      <h2>{watches.size}</h2>
    </div>
  );
};

export default WatchDetails;
