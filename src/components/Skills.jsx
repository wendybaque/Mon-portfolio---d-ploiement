import React from "react";
import glide from "../assets/glide.webp";
import dorik from "../assets/dorik.svg";
import carrd from "../assets/carrd.webp";
import wordpress from "../assets/LogoWordpress.webp";

function Skills() {
  return (
    <div
      id="skills"
      className="m-6 p-6 lg:grid grid-col-6 grid-flow-col gap-12 content-start items-start justify-items-center place-items-center"
      aria-label="Partie sur les compétences de Wendy Baqué"
    >
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Frontend
        </h3>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          className="mb-4"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          className="mb-4"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="javascript"
          className="mb-4"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="typescript"
          className="mb-4"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="react"
          className="mb-4"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
          alt="angular"
          className="mb-4"
        />
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Backend
        </h3>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          alt="express.js"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="node.js"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          alt="mysql"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          alt="firebase"
        />
      </div>

      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Style
        </h3>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="tailwindcss"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
          alt="bootstrap"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="sass"
        />
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Design
        </h3>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="figma"
          className="mb-4"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
          alt="canva"
          className="mb-4"
        />
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          Versioning
        </h3>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt="git"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="github"
        />
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-sky-800 p-4 text-center">
          No Code
        </h3>
        <img src={glide} alt="Glide App" className="mb-4 w-36" />
        <img src={carrd} alt="Carrd.io" className="mb-4 w-36" />
        <img src={dorik} alt="Dorik.io" className="mb-4 w-36" />
        <img src={wordpress} alt="Wordpress" className="mb-4 w-36" />
      </div>
    </div>
  );
}
export default Skills;
