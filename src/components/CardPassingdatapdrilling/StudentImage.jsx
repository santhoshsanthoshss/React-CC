import React from "react";

const StudentImage = ({ imgUrl }) => {
  return (
    <>
      <div>
        <img src={imgUrl} height="200px" width="300px" alt="" />
      </div>
    </>
  );
};

export default StudentImage;
