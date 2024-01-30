import React from "react";

const Eventhandlers = () => {
  let data = () => {
    console.log("Get Data Executed");
  };

  //   Event object
  let getusers = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
  };

  //   getting the index position to click the button
  let colors = ["red", "blue", "green", "orange"];

  let getusr = (i) => {
    console.log(i);
  };
  console.log(colors);

  return (
    <div>
      <button onClick={getusers}>First users</button>
      <button onClick={data}>Click</button>
      <button
        onClick={() => {
          console.log("user Clicked");
        }}
      >
        Clicked1
      </button>

      <div>
        <ul>
          {colors.map((colors, index) => {
            return (
              <li key={index}>
                {colors}
                <button
                  style={{
                    marginLeft: "80px",
                  }}
                  onClick={() => {
                    getusr(index);
                  }}
                >
                  GetIndex
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Eventhandlers;
