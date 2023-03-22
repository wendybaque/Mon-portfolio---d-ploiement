import React from "react";
import { Fade } from "react-awesome-reveal";

import Wendy from "../assets/wendycarré.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Intro() {
  return (
    <div
      id="intro"
      className="text-xl font-poppins lg:flex lg:flex-row"
      aria-label="Introduction du site"
    >
      <section className="basis-1/2 lg:ml-10 lg:p-6">
        <Fade cascade damping={0.5} duration={2000}>
          <h2 className="font-poppins font-bold text-2xl p-4">
            Je suis{" "}
            <span className="text-sky-800 animate-pulse">Wendy Baqué</span>
          </h2>
        </Fade>
        <h3 className="p-4">Développeuse Full Stack</h3>
        <h3 className="p-4 text-sky-800 font-bold">
          Javascript | React | Angular | Node.js | Express.js | MySQL | Firebase
          | Tailwindcss | <br />
          🌈 No code friendly ! <br />
          📖 Auteure de romans
        </h3>
        <p className="p-4">
          Après un bilan de compétences réalisé en full remote, je suis en
          reconversion professionnelle dans le domaine du développement web et
          web mobile.
        </p>
        <p className="p-4">
          💻 A la suite de ma formation à la Wild Code School et un stage très
          enrichissant chez Fedmind et de bénévolat chez O Media et Nelixair,
          j'ai créé{" "}
          <span className="font-bold text-fuchsia-500">
            <a
              href="https://wendev.fr/"
              alt="Redirection vers le site de WenDev"
              target="_blank"
              rel="noreferrer"
            >
              WenDev
            </a>
          </span>
          , ma propre entreprise qui vous proposera des solutions numériques
          personnalisées, modernes et adaptées à vos besoins.
        </p>
      </section>
      <section className="basis-1/4 ml-4 p-4">
        <img src={Wendy} alt="Wendy Baqué" />
      </section>
      <section className="flex justify-evenly p-4">
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
            alt="LinkedIn de Wendy Baqué"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn de Wendy Baqué"
              className="animate-pulse mt-24 mr-20 w-20 drop-shadow-2xl"
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/wendybaque"
            alt="Github de Wendy Baqué"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="Github de Wendy Baqué"
              className="animate-pulse mt-24 w-20 drop-shadow-2xl"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
export default Intro;
