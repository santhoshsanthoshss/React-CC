import React from "react";
// import FetchingtheApi from "./FetchingtheApi";
import { UseFetchcustom } from "./UseFetchcustom";
import LaderSpineer from "../LaderSpineer";

function FakestoreChook() {
  let { apidata, loading, error } = UseFetchcustom(
    "https://fakestoreapi.com/products"
  );
  return (
    <div>
      <h1>{loading && <LaderSpineer />}</h1>
      <h1>{error && "error..."}</h1>
      {apidata.map(({ id, image }) => {
        return (
          <div key={id}>
            <img height="200px" src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default FakestoreChook;
