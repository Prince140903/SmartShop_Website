import React, { useState } from "react";
import "./header.css";
// import Select from '../selectDrop/select';
// import SearchIcon from '@mui/icons-material/Search';
import DynamicIcon from "../../constants/icons.jsx";
import images from "../../constants/images.js";
import { Select } from "../../components";

const header = () => {
  const [categories, setcategories] = useState([
    "All Categories",
    "Milks & Dairies",
    "Wines & Drinks",
    "Clothing & Beauty",
    "Fresh Seafood",
    "Petfoods & toys",
    "Fast Food",
    "Baking Material",
    "Fruits & Vegetables",
    "Bread & Juice",
  ]);

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={images.Logo} alt="logo" />
            </div>

            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                {/* <div className="selectDrop cursor">All Categories</div> */}
                <Select data={categories} />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <DynamicIcon
                    iconName="Search"
                    className="searchIcon cursor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
