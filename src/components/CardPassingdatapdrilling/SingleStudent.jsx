import React from "react";
import StudentName from "./StudentName";
import StudentImage from "./StudentImage";
import Age from "./Age";
import "../../CSS/SingleStudent.css";

const SingleStudent = ({ sname, imgUrl, age }) => {
  return (
    <>
      <section className="userdata">
        <StudentImage imgUrl={imgUrl} />

        <StudentName sname={sname} />
        <Age age={age} />
      </section>
    </>
  );
};

export default SingleStudent;

SingleStudent.defaultProps = {
  id: "no NAME ",
  imgUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
  age: "no age",
};
