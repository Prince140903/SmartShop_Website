import React from "react";
import "./header.css";

const header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
