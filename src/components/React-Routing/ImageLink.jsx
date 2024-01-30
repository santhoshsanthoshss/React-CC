import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styleBar from "../../CSS/Bar.module.css";

const ImageLink = () => {
  return (
    <div>
      <div>
        <Link to="image1">
          <img
            src="https://rdfl.com.au/wp-content/uploads/2021/01/maxresdefault.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </Link>
        <Link to="image2">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            width="200px"
            height="200px"
          />
        </Link>
        <Link to="image3">
          <img
            src="https://www.befunky.com/images/prismic/f5ca4181-01da-4237-92bf-b6938359503e_hero-blur-image-5.jpg?auto=avif,webp&format=jpg&width=896"
            alt=""
            width="200px"
            height="200px"
          />
        </Link>
        <Link to="image4">
          <img
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </Link>
        <div
          style={{
            border: "1px solid red",
            margin: "50px auto",
            width: "500px",
            height: "400px",
          }}
        >
          <div className={styleBar.imagewidth}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLink;
