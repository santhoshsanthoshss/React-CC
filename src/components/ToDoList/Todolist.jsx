import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../CSS/Todolist.css";
const Todolist = () => {
  const [target, settarget] = useState("");
  const [items, setitems] = useState([]);
  // const [message, setmessage] = useState("");
  let inputupdate = ({ target: { value } }) => {
    settarget(value);
  };

  let addtodo = () => {
    setitems([...items, target]);
    console.log(items);

    target && toast.success("sucess");
    settarget("");
    target === "" && toast.error("Invalid");

    // setTimeout(updateadd, 2000);
    // setTimeout(removeadd, 3000);
  };
  // ! added popup
  // let updateadd = () => {
  //   setmessage("Added success");
  // };

  // let removeadd = () => {
  //   setmessage("");
  // };
  // ! deleted item

  let deleteditem = (index) => {
    let deletuser = items.filter((element, i) => {
      return index !== i;
    });
    setitems(deletuser);
    toast.error("Deleted");
  };

  return (
    <div id="wrapper">
      {/* <h1 className="measssge">{message}</h1> */}
      <input
        type="text"
        placeholder="Enter Your Task"
        onChange={inputupdate}
        value={target}
        id="input"
      />
      <button id="add" onClick={addtodo}>
        Add
      </button>
      {/* <ToastContainer /> */}

      <div>
        {items.map((element, index) => {
          return (
            <div key={index}>
              <span className="spanui">{element}</span>
              {element && (
                // <i
                //   onClick={() => {
                //     deleteditem(index);
                //   }}
                //   // className="fa fa-trash"
                //   aria-hidden="true"
                // >
                //   &#10060; &#x274C;
                // </i>
                <button
                  onClick={() => {
                    deleteditem(index);
                  }}
                >
                  {" "}
                  &#10060;
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
