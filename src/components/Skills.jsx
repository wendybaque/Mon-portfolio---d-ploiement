import React from "react";
import htmlcss from "../assets/htmlcss.webp";
import javascript from "../assets/LogoJavascript.webp";
import canva from "../assets/LogoCanva.webp";
import expressnode from "../assets/logoexpressnodepng.webp";
import figma from "../assets/LogoFigma.webp";
import git from "../assets/logogit.webp";
import github from "../assets/LogoGithub.webp";
import marvel from "../assets/LogoMarvel.webp";
import react from "../assets/LogoReact.webp";
import tailwind from "../assets/LogoTailwindcss.webp";
import mysql from "../assets/mysql.webp";
import mongodb from "../assets/mongodb.webp";
import bootstrap from "../assets/bootstrap.webp";
import styled from "../assets/styledcomponents.webp";
import glide from "../assets/glide.webp";
import dorik from "../assets/dorik.svg";
import redux from "../assets/redux.webp";
import firebase from "../assets/firebase.webp";
import query from "../assets/react-query.webp";
import sass from "../assets/sass.webp";
import carrd from "../assets/carrd.webp";
import wordpress from "../assets/LogoWordpress.webp";

function Skills() {
  return (
    <div
      id="skills"
      className="m-6 p-6 lg:grid grid-col-6 grid-flow-col gap-12 justify-center justify-items-center place-items-center"
      aria-label="Partie sur les compétences de Wendy Baqué"
    >
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Frontend
        </h3>
        <img src={htmlcss} alt="Html et Css" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">HTML5 et CSS3</p>
        <img src={javascript} alt="Javascript" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Javascript</p>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Backend
        </h3>
        <img
          src={expressnode}
          alt="Express et Node"
          className="w-36"
        />
        <p className="font-poppins p-2 text-center text-lg">
          Express.js & Node.js
        </p>
        <img src={mysql} alt="MySQL" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">MySQL</p>
        <img src={mongodb} alt="MongoDB" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">MongoDB</p>
        <img src={firebase} alt="Firebase" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Firebase</p>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          React
        </h3>
        <img src={react} alt="React" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">React.js</p>
        <img src={redux} alt="React Redux" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">React Redux</p>
        <img src={query} alt="React Query" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">React Query</p>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Style
        </h3>
        <img src={tailwind} alt="Tailwindcss" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Tailwindcss</p>
        <img src={bootstrap} alt="Bootstrap" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Bootstrap</p>
        <img src={styled} alt="Styled components" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">
          Styled components
        </p>
        <img src={sass} alt="Sass" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Sass</p>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Design
        </h3>
        <img src={canva} alt="Canva" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Canva</p>
        <img src={figma} alt="Figma" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Figma</p>
        <img src={marvel} alt="Marvel app" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Marvel App</p>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Versioning
        </h3>
        <img src={github} alt="Github" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Github</p>
        <img src={git} alt="Git" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Git</p>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          No Code
        </h3>
        <img src={glide} alt="Glide App" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Glide App</p>
        <img src={carrd} alt="Carrd.io" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Carrd.io</p>
        <img src={dorik} alt="Dorik.io" className="w-36" />
        <p className="font-poppins p-2 text-center">Dorik.io</p>
        <img src={wordpress} alt="Wordpress" className="w-36" />
        <p className="font-poppins p-2 text-center text-lg">Wordpress</p>
      </div>
    </div>
  );
}
export default Skills;
