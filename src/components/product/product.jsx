import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";

import images from "../../constants/images";
import { Value } from "sass";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = () => {
  return (
    <div className="productThumb">
      <div className="imgwrapper">
        <img src={images.camera} className="w-100" />

        <span className="d-block catName">Camera</span>
        <h4 className="title">
          <Link>Best camera ever , Best branded Camera</Link>
        </h4>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
        <span className="brand d-block text-g">
          By <Link className="text-g">Sony</Link>
        </span>
        <div className="d-flex align-items-center ml-3">
          <div className="d-flex align-items-center">
            <spam className="price text-g font-weight-bold ">$28.85</spam>{" "}
            <span className="oldPrice">$32.8</span>
          </div>

          <Button className='ml-auto transition'><ShoppingCartOutlinedIcon/>ADD</Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
