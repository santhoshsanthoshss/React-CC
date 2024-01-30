import React, { useState } from "react";
import UseEffect from "../UseEffectHook/UseEffect";
import SetInverval from "./SetInverval";

const ToggleUseEffect = () => {
  const [toggle, settoggle] = useState(true);
  let changetoogle = () => {
    settoggle(!toggle);
  };
  return (
    <div>
      {toggle && <SetInverval />}
      <button onClick={changetoogle}>{toggle ? "Remove" : "Add"}</button>
    </div>
  );
};

export default ToggleUseEffect;
