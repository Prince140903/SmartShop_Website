import React, { useState } from "react";
import "./select.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DynamicIcon from "../../constants/icons.jsx";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = (props) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState("All Categories");

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        <span className="openSelect" onClick={openSelect}>
          {selectedItem}{" "}
          <DynamicIcon iconName="KeyboardArrowDown" className="arrow" />{" "}
        </span>
        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchField">
              <input type="text" placeholder="Search here.." />
            </div>
            <ul className="searchResults">
              {props.data.map((item, index) => {
                return (
                  <li
                    onclick={() => closeSelect(index, item)}
                    className={`${selectedIndex === index ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
