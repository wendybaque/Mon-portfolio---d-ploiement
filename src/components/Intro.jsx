import React from "react";
import "./intro.css";
import photocv from "../assets/photocv.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper" aria-label="Bloc de présentation de gauche avec texte d'introduction">
          <main>
          <h2 className="intro-hello">Bienvenue !</h2>
          <h1 className="intro-name">
            {" "}
            Je suis <span>Wendy Baqué</span>
          </h1>
          <h2 className="intro-title">Développeuse web full stack </h2>
          <p className="intro-technos">
            Javascript React.js | Node.js | Express.js | Auteure de romans
          </p>
          <div className="intro-description">
            <p>
              Après un bilan de compétences réalisé en full remote, je suis en
              reconversion dans le domaine du développement web et web mobile.
              💻{" "}
            </p>
            <p>
              Après une formation intensive et passionnante à la Wild Code
              School, je souhaite passer mon titre RNCP et m&apos;épanouir dans
              un travail porteur d&apos;avenir et de sens.
            </p>
          </div>
          <div className="intro-social-medias">
            <div className="intro-linkedin">
              <a
                href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
                target="_blanck"
              >
                <img
                  src={linkedin}
                  alt="pictogramme avec le logo de linkedin"
                  className="intro-linkedin-img"
                />{" "}
              </a>
            </div>
            <div className="intro-github">
              <a href="https://github.com/wendybaque" target="_blanck">
                <img src={github} alt="pictogramme avec le logo degithub" className="intro-github-img" />
              </a>
            </div>
          </div>
          </main>
        </div>
      </div>
      <div className="intro-right" aria-label="bloc de présentation de droite avec photo de Wendy Baqué">
        <div className="intro-bg" />
        <img src={photocv} alt="Wendy Baqué" className="intro-img" />
        <div className="intro-right-wrapper" />
      </div>
    </div>
  );
}
export default Intro;
