import React from "react";
import HomeSlider from "./Slider/slider.jsx";
import { CatSlider, Banners } from "../../components";

import "./home.css";
import Product from "../../components/product/product.jsx";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab">
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
              <Product />
            </div>

            <div className="item">
              <Product />
            </div>

            <div className="item">
              <Product />
            </div>

            <div className="item">
              <Product />
            </div>

            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
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
    </>
  );
};

export default Home;
