import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ImageGallery1 from "./ImageGallery1";
import ImageGallery2 from "./ImageGallery2";
import ImageGallery3 from "./ImageGallery3";
import ImageGallery4 from "./ImageGallery4";
import ImageLink from "./ImageLink";

const ImageRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageLink />}>
            <Route index element={<ImageGallery1 />} />

            <Route path="image1" element={<ImageGallery />} />
            <Route path="image2" element={<ImageGallery2 />} />
            <Route path="image3" element={<ImageGallery3 />} />
            <Route path="image4" element={<ImageGallery4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ImageRouting;
