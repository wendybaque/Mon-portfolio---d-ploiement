import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <div className="m-6" id="projects">
      <div aria-label="Partie sur les projets réalisés par Wendy Baqué, présentés en cartes"></div>
      <section className="basis-1/2 lg:ml-10 lg:p-6">
        <p className="font-poppins p-4 text-xl">
          J'adore réaliser des side projects pour me former et vous montrer mes
          réalisations pour mes clients. <br/> Vous montrer ces projets par ordre
          antéchronologique, c'est aussi un moyen de voir qu'en tant que dev, je
          ne cesse d'évoluer et me former à de nouvelles technologies !
        </p>
      </section>
      <div className="lg:m-10 lg:p-10 ">
        <ProjectCard />
      </div>
    </div>
  );
}
export default ProjectList;
