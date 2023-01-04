import React from "react";
import "./hero.css";
import AnimatedColors from "./AnimatedColor.jsx"

const Hero = () => {
  return (
    <div>
      <header aria-label="En-tête" className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="text-white rounded-xl">
          <AnimatedColors/>
        </div>
      </header>
    </div>
  );
};

export default Hero;
