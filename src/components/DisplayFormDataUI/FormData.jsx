import React, { useState } from "react";

const FormData = () => {
  // !first way
  //   const [fname, setfname] = useState("");
  //   const [lname, setlname] = useState("");
  //   const [telphone, settelphone] = useState("");

  //   let updateFn = (e) => {
  //     setfname(e.target.value);
  //   };
  //   let updateln = ({ target }) => {
  //     setlname(target.value);
  //   };
  //   let updateTel = ({ target: { value } }) => {
  //     settelphone(value);
  //   };

  //   let fdata = (e) => {
  //     e.preventDefault();
  //     let userobj = { fname, lname, telphone };
  //     console.log(userobj);
  //   };
  // --------------------------------------------------------->
  // !or another way

  let [flt, setflt] = useState({ fn: "", ln: "", tel: "" });
  let changedata = ({ target: { name, value } }) => {
    setflt({ ...flt, [name]: value });
  };
  let changeddata = (e) => {
    e.preventDefault();
    console.log(flt);
  };
  return (
    // !first way
    // <div>
    //   <h1>
    //     Fullname:
    //     {`${fname} ${lname} ${telphone}`}
    //     {/* {fname} {lname} {telphone} */}
    //   </h1>
    //   <form action="" onSubmit={fdata}>
    //     <input type="text" placeholder="FirstName" onChange={updateFn} />
    //     <br />
    //     <hr />
    //     <input type="text" placeholder="LastName" onChange={updateln} />
    //     <br />
    //     <hr />

    //     <input type="tel" placeholder="Telphone" onChange={updateTel} />
    //     <br />
    //     <hr />
    //     <button>Register</button>
    //   </form>
    // </div>
    // ----------------------------------------------------------------->
    // !or another way
    <div>
      <h1>
        Full Data:{flt.fn} {flt.ln} {flt.tel}
      </h1>
      <form action="" onSubmit={changeddata}>
        <input
          type="text"
          placeholder="FirstName"
          name="fn"
          onChange={changedata}
        />
        <br />
        <hr />
        <input
          type="text"
          placeholder="LastName"
          name="ln"
          onChange={changedata}
        />
        <br />
        <hr />
        <input
          type="tel"
          name="tel"
          placeholder="Mobile"
          onChange={changedata}
        />
        <br />
        <hr />
        <button>Regiter</button>
      </form>
    </div>
  );
};

export default FormData;
