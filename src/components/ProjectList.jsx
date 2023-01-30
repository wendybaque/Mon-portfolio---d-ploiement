import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <div className="m-6">
      <div  aria-label="Partie sur les projets réalisés par Wendy Baqué, présentés en cartes">
      </div>
      <div className="m-10 p-10">
        <ProjectCard />
      </div>
    </div>
  );
}
export default ProjectList;
