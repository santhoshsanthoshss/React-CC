import React, { useEffect, useState } from "react";

const SetInverval = () => {
  const [count, setcount] = useState(0);
  //   const [count1, setcount1] = useState(0);
  const [sname, setsname] = useState("john");
  const [evenadd, setevenadd] = useState("even");
  //   !--------------------------------------
  // useEffect(() => {
  //     let interval = setInterval(() => {
  //       updatecounter();
  //       console.log("rendered");
  //     });  //& if we donot pass the array dependices it run into infite loop

  // useEffect(() => {
  //   setcount(count+1) //& to stop that we need to pass array dependices
  //     },[]);
  // !--------------------------------------------
  useEffect(() => {
    setsname("miller");
    console.log("miller"); //! miller will be changed after the state change
  }, [sname]);
  //   !!------------------------------------------
  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       updatecounter1();
  //       console.log("rendered");
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //       console.log("renderedremoved"); //& to stop the rendering process we use clean up function
  //     };
  //   });
  //   let updatecounter = () => {
  //     setcount(count + 1);
  //     console.log("update");
  //   };
  //   let updatecounter1 = () => {
  //     setcount1(count1 + 1);
  //     console.log("update1");
  //   };
  //   !!------------------------------------------
  //   useEffect(() => {
  //     setcount(count + 1);
  //   }, [count1]);

  //   useEffect(() => {
  //     setcount1(count1 + 1);
  //   }, [count]);

  //   let updatecounter = () => {
  //     console.log("update");
  //   };                            //!  infite loop will be happen becuase both useffect are using the different dependcies
  //   let updatecounter1 = () => {
  //     setcount1(count1 + 1);
  //     console.log("update1");
  //   };
  //   !!------------------------------------------

  //   let updatecounter = () => {
  //     if (count !== 5) {
  //       setcount(count + 1);
  //     }    //! till it will execute 5 after that state will not update
  //   };
  //   !!------------------------------------------

  //   let updatecounter = () => {
  //     setcount(count + 1);
  //     console.log(count); //! intzial value it start from 0
  //     setcount((pv) => {
  //       return pv + 1;  //! here we get the previous value
  //     });
  //     setcount((pv) => {
  //       return pv + 1;
  //     });
  //   };
  //   !!------------------------------------------
  //   let updatecounter = () => {
  //     setcount(count + 1);
  //     if (count % 2 === 0) {
  //       setevenadd("even");
  //     } else {               //! it will give you wrong output beacuse we can take previous value directly
  //       setevenadd("add");
  //     }
  //   };
  //   !!------------------------------------------

  let updatecounter = () => {
    setcount(count + 1);
  };
  useEffect(() => {
    if (count % 2 === 0) {
      setevenadd("even"); //! we need to useeffect it will get coreect output
    } else {
      setevenadd("add");
    }
  }, [count]);
  //   !!------------------------------------------

  return (
    <div>
      <h2>{sname}</h2>

      <h1>
        Count: {count} {evenadd}
      </h1>
      <button onClick={updatecounter}>update</button>
      {/* <h1>Count1: {count1}</h1> */}
      {/* <button onClick={updatecounter1}>update1</button> */}
    </div>
  );
};

export default SetInverval;
