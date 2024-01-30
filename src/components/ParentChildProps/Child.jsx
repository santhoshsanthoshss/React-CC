import React from "react";

const Child = ({ name, getData }) => {
  let get = "dataAvaiable";

  getData(get);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Child;
