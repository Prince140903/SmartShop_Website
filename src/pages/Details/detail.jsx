import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import images from "../../constants/images";
import Slider from "react-slick";
import { useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";


const DetailsPage = () => {
  const [zoomImage, setZoomImage] = useState(
    `https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg`
  );
  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smlImageSize, setSmlImageSize] = useState([150, 150]);

  const [activeSize, setActiveSize] = useState(0);
  const [inputValue, setinputValue] = useState(1);

  const zoomSlider = useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (url) => {
    setZoomImage(url);
  };

  const isActive = (index) => {
    setActiveSize(index);
  };

  const plus = () => {
    setinputValue = inputValue + 1;
  };

  const minus = () => {
    if (inputValue !== 0) {
      setinputValue = inputValue - 1;
    }
  };

  return (
    <secction className="detailspage">
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2  mb-0">
            <li>
              <Link>Home </Link>
            </li>
            <li>
              <Link>Vegetables & Tubers</Link>
            </li>

            <li>Seeds Of Change Organic</li>
          </ul>
        </div>
      </div>
      <div className="container fluid detailsContainer">
        <div className="row pt-3 pb-3">
          <div className="col-md-9 leftPart">
            <div className="row">
              {/* productZoom start here */}
              <div className="col-md-5">
                <div className="productZoom">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`${zoomImage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`}
                    className="w-100"
                  />
                </div>
                <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                </Slider>
              </div>
              {/* productZoom end  here */}

              <div className="col-md-7 productInfo">
                {/* productInfo start here */}
                <h1>Seeds Of Chnage Organic Quinoa,Brown </h1>
                <div className="d-flex-align-items-center mb-4 mt-3">
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-light">(32 rewies)</span>
                </div>
                <div className="priceSec d-flex align-items-center mb-3">
                  <span className="text-g priceLarge">₹38</span>
                  <div className="ml-2 d-flex column">
                    <span className="text-org">26% Off</span>

                    <span className="OldPrice">₹52</span>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.Aliquam rem officia,corrupti reiciendis minima nisi modi,
                  quasi,odio minus dolore impedit fuga eum eligendi.
                </p>

                <div className="productSize d-flex align-items-center">
                  <span>Size / Weight:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 0 ? `active` : ``}`}
                        onClick={() => isActive(0)}
                      >
                        50g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 1 ? `active` : ``}`}
                        onClick={() => isActive(1)}
                      >
                        60g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 2 ? `active` : ``}`}
                        onClick={() => isActive(2)}
                      >
                        80g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 3 ? `active` : ``}`}
                        onClick={() => isActive(3)}
                      >
                        100g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 4 ? `active` : ``}`}
                        onClick={() => isActive(4)}
                      >
                        150g
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                  <div className="counterSec mr-3">
                    <input type="number" value={inputValue} />

                    <span className="arrow plus" onClick={plus}>
                      {" "}
                      {/*arrows in increasing number of products  */}
                      <KeyboardArrowUpIcon />
                    </span>
                    <span className="arrow minus" onClick={minus}>
                      <KeyboardArrowDownIcon />
                    </span>
                  </div>
                </div>

                <button className="btn-g btn-lgaddtocartbtn ">
                  <ShoppingCartOutlinedIcon />
                  Add to Cart
                </button>
                <button className=" btn-lg addtocartbtn ml-3 btn-border">
                  <FavoriteBorderOutlinedIcon />
                </button>
                <button className=" btn-lg addtocartbtn ml-3 btn-border">
                  <CompareArrowsOutlinedIcon />
                </button>

                {/* productInfo end here */}
              </div>
            </div>

            <div className="col-md-3 rightPart2"> {/* part2 */}</div>
          </div>
        </div>
      </div>
    </secction>
  );
};

export default DetailsPage;
