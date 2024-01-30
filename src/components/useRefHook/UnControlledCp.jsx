import React, { useRef } from "react";

const UnControlledCp = () => {
  let userinput = useRef(null);
  let pwdinput = useRef(null);

  //   console.log(userinput.current);
  //   console.log(pwdinput.current);

  let getformdata = (e) => {
    e.preventDefault();
    let u = userinput.current.value;
    let p = pwdinput.current.value;
    console.log(u);
    console.log(p);
  };
  return (
    <div>
      <form action="" onSubmit={getformdata}>
        <input type="text" placeholder="Enter the data" ref={userinput} />
        <br />
        <hr />
        <input type="password" placeholder="Enter the Pssword" ref={pwdinput} />
        <br />
        <hr />

        <button>Click</button>
      </form>
    </div>
  );
};

export default UnControlledCp;
