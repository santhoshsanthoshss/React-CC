import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Mobile from "./Mobile";
import Watch from "./Watch";
import Television from "./Television";
import NavBar from "./NavBar";
import Signup from "./Signup";
import styleBar from "../../CSS/Bar.module.css";
import Imagemange from "./Imagemange";
import Mobiledata from "./Mobiledata";
import MobileDetails from "./MobileDetails";
import WatchDetails from "./WatchDetails";
const Routersfield = () => {
  return (
    <BrowserRouter>
      <NavBar
        navElement={{
          key1: "Home",
          key2: "About",
          key3: "Product",
          key4: "Signup",
        }}
        navLink={{
          url1: "/",
          url2: "/about",
          url3: "/product",
          url4: "/signup",
        }}
        className={styleBar.navabar_main}
        alterClass={styleBar.hyper_main}
      />
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/about" element={"about"} />
        <Route path="/product" element={<Product />}>
          <Route index element={"Mobile"} />

          <Route path="mobile" element={<Mobile />} />
          <Route path="watch" element={<Watch />} />
          <Route path="television" element={<Television />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/product/mobile/:mobileid" element={<MobileDetails />} />
        <Route path="/product/watch/:watchid" element={<WatchDetails />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={"Page Not Found!!!"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routersfield;
