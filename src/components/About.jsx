import React from "react";
import "./about.css";
import cvportfolio1 from "../assets/curriculum.png";
import logoauteure from "../assets/logoauteure.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card">
          <img
            src={cvportfolio1}
            alt="curriculum vitae"
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">Qui suis-je ?</h1>
        <p className="about-subtitle">
          🚀 Les valeurs les plus importantes dans le monde du travail sont,
          selon moi, l&apos;entraide, l&apos;écoute, l&apos;expression de soi,
          l&apos;épanouissement et la réussite.
        </p>
        <p className="about-description">
          ➕ Mon petit plus ? Je suis développeuse, mais aussi psychologue !
          Ainsi, je suis attirée par l&apos;UX et l&apos;UI. Ce sont des
          domaines qui me parlent, et qui me tiennent toujours à cœur. Mon
          regard est un bonus :{" "}
          <span className="spanabout">100% user first ! </span>
        </p>
        <p className="about-description">
          <span className="spanabout">
            Motivée, rigoureuse, assidue et ponctuelle{" "}
          </span>
          , je suis ouverte à tout type d&apos;entreprise.
        </p>
        <div className="about-auteure-wrapper">
          <p className="about-auteure">
            📚 Je suis aussi auteure de 4 romans contemporains sur des
            thématiques qui me tiennent à coeur : la santé mentale,
            l&apos;acceptation de soi, la quête de sens, la Vie, la musique et
            la fin de vie.
          </p>
          <p className="about-auteure">
            Cela me permet de développer des compétences organisationnelles, de
            maîtriser les normes rédactionnelles et, surtout, d&apos;être à
            l&apos; avec le <span className="spanabout">storytelling</span>{" "}
            lorsque j&apos; un projet à présenter aux clients et collaborateurs.{" "}
          </p>
          <a href="https://linktr.ee/Antiigone" target="_blanck">
            <img
              src={logoauteure}
              alt="logo auteure antiigone"
              className="about-auteure-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
