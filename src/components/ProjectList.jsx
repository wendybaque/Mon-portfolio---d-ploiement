import React from "react";
import ProjectCard from "./ProjectCard";
import "./projectlist.css";
// import { projects } from "./data";

function ProjectList() {
  return (
    <div className="project">
      <div className="project-list-texts">
        <h1 className="project-list-title">Mes projets</h1>
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

// function ProjectList() {
//   return (
//     <div className="project">
//       <div className="project-list-texts">
//         <h1 className="project-list-title">Mes projets</h1>
//         <p className="project-list-description">
//           Voici une sélection des mes réalisations web. Enjoy !
//         </p>
//       </div>
//       <div className="project-list">
//         {projects.map((item) => (
//           <ProjectCard key={item.id} img={item.img} link={item.link} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default ProjectList;

// ligne 17 avec name :
// <ProjectCard key={item.id} name={item.name} img={item.img} link={item.link} />
