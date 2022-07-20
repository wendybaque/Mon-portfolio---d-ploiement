import React from "react";
import "./about.css";
import cvportfolio from "../assets/cv.png";
import logoauteure from "../assets/logoauteure.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card" aria-label="curriculum vitae de Wendy Baqué">
          <img
            src={cvportfolio}
            alt="curriculum vitae"
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right" aria-label="Bloc de présentation des valeurs professionnelles de Wendy Baqué">
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
          ,  <p>
              je suis actuellement en stage chez Fedmind, une start-up géniale. Je les aide à développer leur application d'aide et d'accompagnement aux patients souffrant d'obésité. 
            </p>
        </p>
        <div className="about-auteure-wrapper" aria-label="Présentation du travail d'auteure de romans de Wendy Baqué">
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
              alt="logo officiel de l'auteure Wendy Baqué, créé par Linda Catherine, représentant le nom de l'auteure avec une guitare électrique et une plume d'écrivain"
              className="about-auteure-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
