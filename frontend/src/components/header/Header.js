import React from "react";
import "./header.css";
import triangle from "./icons/Group.1.png";
// import { BiChevronDown } from "react-icons/bi";
// import { FaRegUserCircle } from "react-icons/fa";
function Header({ title }) {
  return (
    <div className="main-container">
      <div className="user-container">
        <div className="user-container-left"></div>
        <div className="user-container-right">
          {/* <div className="user">
            <FaRegUserCircle
              size={40}
              color="rgb(0,0,0,0.4)"
              style={{ marginRight: 10 }}
            />
            <h3>Test user</h3>
            <BiChevronDown
              size={40}
              color="rgb(0,0,0,0.7)"
              style={{ marginLeft: 10 }}
            />
          </div> */}
        </div>
      </div>
      <div className="head">
        <div className="head-left" id="head-left">
          <h2>{title}</h2>
        </div>
        <div className="head-right">
          <img src={triangle} alt="triangle" style={{ height: 60 }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
