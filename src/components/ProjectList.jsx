import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <div>
      <div aria-label="partie sur les projets réalisés par Wendy Baqué, présentés en cartes">
        <p>
          Voici une sélection des mes réalisations web. Enjoy !
        </p>
      </div>
      <div className="m-10 p-6">
        <ProjectCard />
      </div>
    </div>
  );
}
export default ProjectList;
