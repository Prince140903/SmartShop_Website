import React, { useState } from "react";
import "./catSlider.css";
import Slider from "react-slick";
// import Speed  from "@mui/icons-material";
// import Fade  from "@mui/material";

const catSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  var settings = {
    dots: false,
    Infinite: true,
    Speed: 500,
    SlidesToShow: 10,
    SlideToScroll: 1,
    Fade: false,
    arrows: true,
  };

  return (
    <>
      {/* <div className="catsliderSection">
        <div className="container-fluid" ref={Slider}>
          <h2 className="hd">Featured categories</h2>
          <Slider
            {...settings}
            className="cat_slider_main"
            id="cat_slider_main"
          >
            {itemBg.length !== 0 &&
              itemBg.map((itemBg, index) => {
                return (
                  <div className="item">
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-13.png" />
                      <h5>Cake & Milk</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-12.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-11.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-9.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-3.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-1.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-2.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-4.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-5.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assest/imgs/shop/cat-14.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
          </Slider>
        </div>
      </div> */}
      <h1>CatSlider here</h1>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};
export default catSlider;
