import React from "react";
import Test from "./Test";
// import USER from "./userdata";
// import { USERS as you } from "./userdata";
const Student = () => {
  // & Using map method ,
  //& when we use map method we need to use to pass the unique id
  // & beacuse it through one error >Each child in a list should have a unique "key" prop.<
  // & we can pass index postion also , but it is not a good practice becuase component will be rerender

  // let USERS = [
  //   {
  //     id: 1,
  //     sname: "santhoshk",
  //     age: 23,
  //     imgUrl:
  //       "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  //   },
  //   {
  //     id: 2,
  //     sname: "kish",
  //     age: 22,
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  //   },
  // ];
  // return (
  //   <div>
  //     {you.map(({ id, sname, imgUrl, age }) => {
  //       return <Test key={id} sname={sname} age={age} imgUrl={imgUrl} />;
  //     })}
  //   </div>
  // );

  // & Normal method
  return (
    <>
      <Test
        sname="BARATH"
        age={23}
        imgUrl="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
      ></Test>
    </>
  );
};

export default Student;
