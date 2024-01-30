import axios from "axios";
import React, { useEffect, useReducer } from "react";

let initialstate = {
  productDetails: [],
  isError: false,
};
let productReduce = (current, action) => {
  console.log(current);
  switch (action.type) {
    case "FetchSuccess":
      return { ...current, productDetails: action.payload };
    case "FetchError":
      return { ...current, isError: true };
    default:
      return current;
  }
};
const FetchingApiUseReducer = () => {
  let [state, dispatch] = useReducer(productReduce, initialstate);
  let getProduct = async () => {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: "FetchSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "FetchError" });
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      {state.productDetails.map(({ id, title, image }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default FetchingApiUseReducer;
