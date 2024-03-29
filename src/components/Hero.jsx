import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div>
      <header
        aria-label="En-tête"
        className="flex items-center justify-center bg-fixed bg-center bg-cover custom-img"
      >
        <div className="text-white rounded-xl mt-10">
          <h2 className="absolute drop-shadow-lg p-2 lg:text-8xl md:text-2xl sm:text-2xl font-poppins text-sky-800 font-bold text-center">
            BIENVENUE <br /> SUR MON <br />
            PORTFOLIO
          </h2>
          <h2 className="relative drop-shadow-lg lg:text-8xl md:text-2xl sm:text-2xl font-poppins text-sky-600 font-bold text-center">
            BIENVENUE <br /> SUR MON <br />
            PORTFOLIO
          </h2>
          <a href="#about" alt="redirection vers la section à propos">
            <div className="drop-shadow-2xl flex items-center justify-center mt-24 animate-bounce">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C12.5523 7 13 7.44772 13 8V13.5858L15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858V8C11 7.44772 11.4477 7 12 7Z"
                    fill="#201A35"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Hero;
