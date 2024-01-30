import React, { useState } from "react";
// import "../../CSS/ReadMoreLess.css";
const ReadmapLess = ({ imgUrl, description }) => {
  const [read, setread] = useState(true);
  let readmore = () => {
    setread(!read);
  };
  return (
    <div className="cards-details ">
      <img src={imgUrl} className="ronaldoimg" alt="" />
      {/* */}
      {/* & using the button */}
      {/* <button className="btnread" onClick={readmore}>
        {read ? (
          <i class="fa fa-play-circle" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
        )}
      </button> */}

      {read ? (
        <i
          onClick={readmore}
          className="fa fa-play-circle"
          aria-hidden="true"
        ></i>
      ) : (
        <i
          onClick={readmore}
          class="fa fa-chevron-circle-down"
          aria-hidden="true"
        ></i>
      )}
      <p className="readpara">
        {read ? description.slice(0, 120) : description}
      </p>
    </div>
  );
};

export default ReadmapLess;
