import React from "react";
import pt from "prop-types";

const Test = ({ sname, age, imgUrl, children }) => {
  // let uppercase = name.toUpperCase();
  // return (
  //   <div>
  //     <h1>{sname}</h1>
  //     <h1>{age}</h1>
  //     <img alt="imgage1" src={imgUrl} height="200px" width="300pxs" />
  //   </div>
  // );

  return (
    <>
      <h1>{sname}</h1>
      <h1>{age}</h1>
      <img alt="imgage1" src={imgUrl} height="200px" width="300px" />
      <h1>{children}</h1>
    </>
  );
};

export default Test;

Test.defaultProps = {
  sname: "no found",
  age: "not Found!",
  imgUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
};

Test.propTypes = {
  sname: pt.string,
  age: pt.number,
  imgUrl: pt.string,
};
