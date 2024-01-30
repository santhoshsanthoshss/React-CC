import React, { useRef } from "react";

const InputUseRefHook = () => {
  let inputref = useRef(null);
  console.log(inputref);

  let btnclick = () => {
    // console.log(inputref.current); //! it refering to the input tag
    console.log(inputref.current.focus());
  };
  return (
    <div>
      <input type="text" placeholder="Enter the Task" ref={inputref} />
      <button onClick={btnclick}>Click</button>
    </div>
  );
};

export default InputUseRefHook;
