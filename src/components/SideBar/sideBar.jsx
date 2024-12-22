import React from "react";
// import "./sideBar.css";

import images from "../../constants/images";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>

          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={images.DrinksIcon} alt="Icon" width={30} />
                <h4 className="mb-0 ml-3 mr-3">Milks & Drinks</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                  30
                </span>
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span>
                <img src={images.ClothesIcon} alt="Icon" width={30} />
                <h4 className="mb-0 ml-3 mr-3">Clothing</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                  30
                </span>
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span>
                <img src={images.snacksIcon} alt="Icon" width={30} />
                <h4 className="mb-0 ml-3 mr-3">Snacks</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                  30
                </span>
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span>
                <img src={images.FruitsIcon} alt="Icon" width={30} />
                <h4 className="mb-0 ml-3 mr-3">Fresh Fruits</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                  30
                </span>
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span>
                <img src={images.petFoodIcon} alt="Icon" width={30} />
                <h4 className="mb-0 ml-3 mr-3">Pet Foods</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                  30
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
