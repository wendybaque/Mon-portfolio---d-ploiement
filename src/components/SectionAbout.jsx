import React from "react";
import "./animatedcolors.css";

const Section = (props) => {
  return (
    <div id="about">
      <section className="drop-shadow-2xl	rounded-lg container flex items-center justify-center h-64 m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="text-container">
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">A</div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div"> </div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">P</div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">R</div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">O</div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">P</div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">O</div>
            </li>
          </ul>
          <ul className="text-ul">
            <li className="text-li">
              <div className="text-div">S</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Section;