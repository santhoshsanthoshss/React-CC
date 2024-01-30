import React from "react";
// import "../../CSS/ReadMoreLess.css";
import USERS from "../../userdata";
import ReadmapLess from "./ReadmapLess";
const ReadMoreLess = () => {
  return (
    <div className="userinfo">
      {USERS.map(({ imgUrl, description }) => {
        return <ReadmapLess imgUrl={imgUrl} description={description} />;
      })}
    </div>
  );
};

export default ReadMoreLess;
