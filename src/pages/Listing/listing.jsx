import React from "react";
import "./listing.css";

import { SideBar } from "../../components";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <section className="listingPage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          <h1>Snack</h1>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={""}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Snack</Link>
            </li>
          </ul>
        </div>

        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              <SideBar />
            </div>

            <div className="col-md-9 rightContent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
