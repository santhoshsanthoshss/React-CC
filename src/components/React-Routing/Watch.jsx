import React from "react";
import WatchData from "./Watchdata";
import { Link } from "react-router-dom";
const Watch = () => {
  return (
    <div>
      {WatchData.map(({ id, name, image, price }) => {
        return (
          <Link to={`/product/watch/${id}`} key={id}>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Watch;
