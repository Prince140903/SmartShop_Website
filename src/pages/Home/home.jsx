import React from "react";
import HomeSliderBanner from "./Slider/slider.jsx";
import { CatSlider, Banners } from "../../components";

import "./home.css";
import Product from "../../components/product/product.jsx";

import Banner3 from "../../assets/banner-3.jpg";
import Slider from "react-slick";
import images from "../../constants/images";

const Home = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      fade: false,
      arrows: true,
    };

  return (
    <>
      <HomeSliderBanner />
      <CatSlider />
      <Banners />
      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">Milks & Dairies</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">Coffes & Teas</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">Vegetable</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
            </ul>
          </div>

          <div className="productRow">
            <div className="item">
              <Product tag="sale" />
            </div>

            <div className="item">
              <Product tag="sale" />
            </div>

            <div className="item">
              <Product tag="new" />
            </div>

            <div className="item">
              <Product tag="new" />
            </div>

            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>
      <section className="homeProducts homeProductRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list list-inline-item">
                <a className="cursor">Feature</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list list-inline-item">
                <a className="cursor">New Added</a>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 pr-5 ">
              <img src={Banner3} className="w-100"></img>
            </div>
            <div className="col-md-9">
              <Slider {...settings} className="productSlider">
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;
