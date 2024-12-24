import React from "react";
import "./banners.css";

import images from "../../constants/images";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={images.Banner2} className="w-100 transition" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <img src={images.Banner2} className="w-100 transition" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <img src={images.Banner3} className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
