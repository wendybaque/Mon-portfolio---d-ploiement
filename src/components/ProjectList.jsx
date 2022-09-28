import React from "react";
import ProjectCard from "./ProjectCard";
import "./projectlist.css";
// import { projects } from "./data";

function ProjectList() {
  return (
    <div className="project">
      <div className="project-list-texts" aria-label="partie sur les projets réalisés par Wendy Baqué, présentés en cartes">
        <h2 className="project-list-title">Mes projets</h2>
        <p className="project-list-description">
          Voici une sélection des mes réalisations web. Enjoy !
        </p>
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}
export default ProjectList;
