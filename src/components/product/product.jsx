import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";

import images from "../../constants/images";
import { Value } from "sass";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Product = () => {
  return (
    <div className="productThumb">
      <Link>
        <div className="imgwrapper">
          <img src={images.camera} className="w-100" />

          <div className="overlay">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <a className="cursor">
                  <FavoriteBorderIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">
                  <CompareArrowsIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">
                  <VisibilityIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <div className="info">
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
            <span className="price text-g font-weight-bold ">₹28899.85</span>
            <span className="oldPrice">₹32999.8</span>
          </div>

          <Button className=" btn-g ml-auto transition">
            <ShoppingCartOutlinedIcon />
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
