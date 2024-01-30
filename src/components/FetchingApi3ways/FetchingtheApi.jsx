import React, { useEffect, useState } from "react";
import LaderSpineer from "../LaderSpineer";
import axios from "axios";
const FetchingtheApi = () => {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  //   ! using the promise then and catch method
  //   useEffect(() => {
  //     let githbapi = fetch("https://api.github.com/users");
  //     githbapi
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((userdata) => {
  //         setuser(userdata);
  //       });
  //   }, []);

  // ! using async and await function in useEffect

  //   useEffect(() => {
  //     async function githubuser() {
  //       let updatedata = await fetch("https://api.github.com/users");
  //       updatedata = await updatedata.json();
  //       setuser(updatedata);
  //     }
  //     githubuser();
  //   }, []);

  // ! we can keep the function outside of the usestate
  //   ! this is called function hoisting , we can but this useffect before aync function also after aync function also
  //   useEffect(() => {
  //     githubuser();
  //   }, []);
  //   async function githubuser() {
  //     let updatedata = await fetch("https://api.github.com/users");
  //     updatedata = await updatedata.json();
  //     setuser(updatedata);
  //   }

  // ! fecthing the data using the axois

  useEffect(() => {
    github();
  }, []);
  async function github() {
    try {
      let { data } = await axios.get("https://api.github.com/users");
      setuser(data);
      setloading(false);
      seterror(false);
    } catch (error) {
      seterror(true);
      // setloading(true);
    }
  }

  return (
    <div>
      <h1>{loading && <LaderSpineer />}</h1>
      <h1>{error && "Error...."}</h1>
      {user.map(({ login, avatar_url, id }) => {
        return (
          <div key={id}>
            <h1>{login}</h1>
            <img src={avatar_url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default FetchingtheApi;
