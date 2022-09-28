import React from "react";
import htmlcss from "../assets/htmlcss.webp";
import javascript from "../assets/LogoJavascript.png";
import canva from "../assets/LogoCanva.png";
import expressnode from "../assets/logoexpressnodepng.png";
import figma from "../assets/LogoFigma.png";
import git from "../assets/logogit.png";
import github from "../assets/LogoGithub.png";
import marvel from "../assets/LogoMarvel.png";
import react from "../assets/LogoReact.png";
import tailwind from "../assets/LogoTailwindcss.png";
import codewars from "../assets/codewars.svg";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import bootstrap from "../assets/bootstrap.png";
import styled from "../assets/styledcomponents.png";
import glide from "../assets/glide.png";
import dorik from "../assets/dorik.svg";
import redux from '../assets/redux.png';
import firebase from '../assets/firebase.png'

import "./skills.css";

function Skills() {
  return (
    <div className="skills" aria-label="Compétences techniques de Wendy Baqué">
      <h2 className="skills-title">Mes compétences</h2>
      <div className="skill-card">

      <div className="skills-domain">
        <h2 className="skill-domain-title">Langages</h2>
        <div className="card" aria-label="skill card">
          <img src={htmlcss} alt="Logo HTML et CSS" className="skill-img" />
          <h3 className="skill-card-title">HTML5 + CSS3</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={javascript} alt="Logo Javascript" className="skill-img" />
          <h3 className="skill-card-title">Javascript</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={react} alt="Logo React" className="skill-img" />
          <h3 className="skill-card-title">React.js</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={redux} alt="Logo Redux" className="skill-img" />
          <h3 className="skill-card-title">Redux</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img
            src={expressnode}
            alt="Logo Express et Node"
            className="skill-img"
          />
          <h3 className="skill-card-title">Express.js et Node.js</h3>
        </div>
        </div>

        <div className="skills-domain">
        <h2 className="skill-domain-title">Style</h2>
        <div className="card" aria-label="skill card">
          <img src={tailwind} alt="Logo tailwind" className="skill-img" />
          <h3 className="skill-card-title">Tailwindcss</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={bootstrap} alt="Logo Bootstrap" className="skill-img" />
          <h3 className="skill-card-title">Bootstrap</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={styled} alt="Logo Styled components" className="skill-img" />
          <h3 className="skill-card-title">Styled Components</h3>
        </div>
        </div>

        <div className="skills-domain">
        <h2 className="skill-domain-title">Bases de données</h2>
        <div className="card" aria-label="skill card">
          <img
            src={mysql}
            alt="Logo MySQL"
            className="skill-img"
          />
          <h3 className="skill-card-title">MySQL</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img
            src={mongodb}
            alt="Logo MongoDB"
            className="skill-img"
          />
          <h3 className="skill-card-title">MongoDB</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img
            src={firebase}
            alt="Logo Firebase"
            className="skill-img"
          />
          <h3 className="skill-card-title">Firebase</h3>
        </div>
        </div>

        <div className="skills-domain">
        <h2 className="skill-domain-title">Versioning</h2>
          <div className="card" aria-label="skill card">
            <img src={git} alt="Logo git" className="skill-img" />
            <h3 className="skill-card-title">Git</h3>
          </div>
          <div className="card" aria-label="skill card">
            <img src={github} alt="Logo Github" className="skill-img" />
            <h3 className="skill-card-title">Github</h3>
          </div>
        </div>

    <div className="skills-domain">
      <h2 className="skill-domain-title">Design</h2>
        <div className="card" aria-label="skill card">
          <img src={canva} alt="Logo Canva" className="skill-img" />
          <h3 className="skill-card-title">Canva</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={figma} alt="Logo Figma" className="skill-img" />
          <h3 className="skill-card-title">Figma</h3>
        </div>
        <div className="card" aria-label="skill card">
          <img src={marvel} alt="Logo Marvel" className="skill-img" />
          <h3 className="skill-card-title">Marvel app</h3>
        </div>
    </div>

    <div className="skills-domain">
        <h2 className="skill-domain-title">No Code</h2>
          <div className="card" aria-label="skill card">
            <img src={glide} alt="Logo Glide apps" className="skill-img" />
            <h3 className="skill-card-title">Glide apps</h3>
          </div>
          <div className="card" aria-label="skill card">
            <img src={dorik} alt="Logo Dorik" className="skill-img" />
            <h3 className="skill-card-title">Dorik.io</h3>
          </div>
        </div>

      

        <div className="skills-domain">
          <h2 className="skill-domain-title">Algorithmie</h2>
            <div className="codewars">
                <img src={codewars} alt="badge codewars" className="codewars-img" aria-label="badge Codewars"/>
                <a href="https://www.codewars.com/users/wendybaque" alt="redirection vers le site Codewars" target="_blank" rel="noreferrer"><h4 className="skill-card-title">Codewars : niveau et profil</h4></a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
