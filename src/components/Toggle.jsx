import React from "react";
import "./toggle.css";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

function Toggle() {
  return (
    <div className="toggle">
      <img src={Sun} alt="toggle icon sun" className="toggle-icon" />
      <img src={Moon} alt="toggle icon moon" className="toggle-icon" />
      <div className="toggle-button" />
    </div>
  );
}

export default Toggle;
