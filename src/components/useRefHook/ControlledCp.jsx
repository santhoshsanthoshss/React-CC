import React, { useState } from "react";

const ControlledCp = () => {
  const [user, setuser] = useState({ fn: "", pwd: "" });
  const [print, setprint] = useState([]);
  let userinput = ({ target: { value, name } }) => {
    setuser({ ...user, [name]: value });
    // console.log(value);
    console.log(user);
  };
  let printUi = () => {
    setprint([...print, user]);
  };
  let deletuser = (index) => {
    let filteredel = print.filter((ele, i) => {
      return index !== i;
    });
    setprint(filteredel);
  };

  let dataclick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      <form action="" onSubmit={dataclick}>
        <input
          type="text"
          placeholder="Enter The username"
          onChange={userinput}
          name="fn"
        />
        <br />
        <hr />
        <input
          type="password"
          placeholder="Enter The password"
          onChange={userinput}
          name="pwd"
        />
        <br />
        <hr />

        <button onClick={printUi}>click</button>
      </form>
      <div>
        {print.map(({ fn, pwd }, ind) => {
          return (
            <div key={ind}>
              <h1>firstname: {fn}</h1>
              <h2>password: {pwd}</h2>
              <button
                onClick={() => {
                  deletuser(ind);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledCp;
