import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div>
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="p-5 text-2xl text-white bg-pink-600 bg-opacity-60 rounded-xl">
          Welcome to my site!
        </div>
      </header>
    </div>
  );
};

export default Hero;
