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

const Product = (props) => {
  return (
    <div className="productThumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}

      <Link>
        <div className="imgWrapper">
          <img
            src="data:image/jpeg;base64,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"
            className="w-100"
          />

          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <a className="cursor" tooltip="Add to Wishlist ">
                  <FavoriteBorderIcon />
                </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor" tooltip="Compare">
                  <CompareArrowsIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" tooltip="Quick View">
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
            <span className="price text-g font-weight-bold ">₹8899.85</span>
            <span className="oldPrice">₹2999.8</span>
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
