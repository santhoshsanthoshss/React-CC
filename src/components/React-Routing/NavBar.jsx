import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navElement, navLink, className, alterClass, image1 }) => {
  return (
    <div className={className}>
      <Link className={alterClass} to={navLink.url1}>
        {navElement.key1}
      </Link>
      <Link className={alterClass} to={navLink.url2}>
        {navElement.key2}
      </Link>
      <Link className={alterClass} to={navLink.url3}>
        {navElement.key3}
      </Link>
      <Link className={alterClass} to={navLink.url4}>
        {navElement.key4}
      </Link>
    </div>
  );
};

export default NavBar;
