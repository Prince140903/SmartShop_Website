import React, { useState } from "react";
import "./header.css";
import DynamicIcon from "../../constants/icons.jsx";
import images from "../../constants/images.js";
import { Select } from "../../components";
// import axios from "axios";
import { Category } from "@mui/icons-material";

const header = () => {
  const [categories, setcategories] = useState([
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

  const stateList = [
    "Andhra Pradesh",
    "Arunalchal Pradesh",
    "Assam",
    "Bihar",
    "Chattishgarh",
    "Goa",
    "Gujrat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerla",
    "Madhya Pradesh",
    "Maharastra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
  ];

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              {/* <img src={images.Logo} alt="logo" className="Logo" /> */}
            </div>

            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select
                  data={categories}
                  placeholder={"All Categories"}
                  icon={false}
                />
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <DynamicIcon
                    iconName="Search"
                    className="searchIcon cursor"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center">
                <div className="stateWrapper">
                  <Select
                    data={stateList}
                    placeholder={"Your Location"}
                    icon={
                      <DynamicIcon
                        iconName="LocationOnOutlined"
                        className="Icon"
                      />
                    }
                  />
                </div>

                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      <DynamicIcon iconName="LoopOutlined" className="Icon" />
                      Compare
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
