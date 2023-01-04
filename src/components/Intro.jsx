import React from "react";
import { Fade } from "react-awesome-reveal";

import Wendy from "../assets/photocv.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Intro() {
  return (
    <div id="intro" className="font-poppins flex flex-row" aria-label="Introduction du site">
      <section className="basis-1/2 ml-10 p-6">
        <Fade cascade damping={0.5} duration={2000}>
          <h2 className="font-poppins font-bold text-2xl p-4">
            Je suis <span className="text-sky-800 animate-pulse">Wendy Baqué</span>
          </h2>
        </Fade>
        <h3 className="p-4">Développeuse Full Stack</h3>
        <h3 className="p-4 text-sky-800 font-bold">
          Javascript React.js | Node.js | Express.js | MySQL | Auteure de romans
        </h3>
        <p className="p-4">
          Après un bilan de compétences réalisé en full remote, je suis en
          reconversion professionnelle dans le domaine du développement web et
          web mobile. 
        </p>
        <p className="p-4">💻 A la suite de ma formation à la Wild Code School et un
          stage très enrichissant chez Fedmind et de bénévolat chez O Media,
          j'envisage de passer mon titre RNCP en février 2023, dans le but de
          créer ma propre entreprise qui vous proposera des solutions numériques
          personnalisées, modernes et adaptées à vos besoins.</p>
      </section>
      <section className="basis-1/4 ml-10 p-6">
        <img src={Wendy} alt="Wendy Baqué" />
      </section>
      <section className="basis-1/4 ml-10 p-6">
        <a
          href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
          alt="LinkedIn de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn de Wendy Baqué"
            className="animate-pulse mt-32 w-20 drop-shadow-2xl"
          />
        </a>
        <a
          href="https://github.com/wendybaque"
          alt="Github de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github}
            alt="Github de Wendy Baqué"
            className="animate-pulse mt-20 w-20 drop-shadow-2xl"
          />
        </a>
      </section>
    </div>
  );
}
export default Intro;
