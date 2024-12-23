import React from "react";
import "./product.css";

import images from "../../constants/images";

const Product = () => {
  return (
    <div className="productThumb">
      <div className="imgwrapper">
        <img src={images.camera} className="w-100" />
      </div>
    </div>
  );
};
export default Product;
