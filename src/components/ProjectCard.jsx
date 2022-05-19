import React from "react";
import "./projectcard.css";

import logoauteure from "../assets/logoauteure.png";
import hackathon from "../assets/hackathon.jpg";
import project from "../assets/project.png";
import resto from "../assets/resto.png";
import simpsons from "../assets/simpsons.png";
import techchallenge from "../assets/techchallenge.png";
import kodework from "../assets/kodeworklogo.png";
import Mood from "../assets/moodlogo.png";
import Save from "../assets/savelogo.png";

function ProjectCard() {
  return (
    <div className="project-wrapper">
      <div className="project-card">
        <div className="project-card-title">Site d&apos;auteure</div>
        <div className="project-card-skills">React | Tailwindcss</div>
        <img src={logoauteure} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Création de mon site d&apos;auteure pour présenter mes romans et mon
            parcours littéraire.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a
                href="https://github.com/wendybaque/site-auteure"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a href="efcaerc" target="_blank" rel="noreferrer">
                Voir le site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">Projet de groupe 1 - KodeWork</div>
        <div className="project-card-skills">HTML5 | CSS3 | Javascript</div>
        <img src={kodework} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Site internet responsive permettant de mettre en relation
            professionnels et particuliers pour trouver des lieux de coworking
            partout en France
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="https://github.com/SAUCYCorentin/coworking-project1">
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a href="https://saucycorentin.github.io/">Voir le site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">
          Projet de groupe 2 - Mood, une application de choix
        </div>
        <div className="project-card-skills">React et Hooks</div>
        <img src={Mood} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Site internet responsive permettant de fair une association entre
            films et pizzas, si on ne sait pas quoi regarder ou si on hésite sur
            la composition de notre pizza ! Un peu de fun pour tester en groupe
            toutes les fonctionnalités qu&apos;offre React.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a
                href="https://github.com/WildCodeSchool/2022-03-RemoteJS-Erreur404-tortues-ninjas"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a
                href="https://mood-une-application-de-choix.netlify.app/home"
                target="_blank"
                rel="noreferrer"
              >
                Voir le site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">Projet de groupe 3 - à venir</div>
        <div className="project-card-skills">Backend | Bases de données</div>
        <img src={project} alt="projet" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Site qui fait des trucs en backend et que je ne sais pas encore ce
            que c&apos;est.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="lyguhij">Voir le code</a>
            </div>
            <div className="links-page">
              <a href="efcaerc">Voir le site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">Hackathon 1 - Save Ourselves</div>
        <div className="project-card-skills">React | Tailwind | Github</div>
        <img src={Save} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Hackathon de 48 heures sur le thème de l&apos;écologie, par groupe
            de 4 personnes, sur toute la Wild Code School. Nous avons réalisé
            une application responsive permettant de mesurer l&apos;empreinte
            écologique d&apos;un utilisateur en fonction de ses éco-gestes.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="https://github.com/KevinLavigne/hackathon">
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a href="efcaerc">Voir le site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">Hackathon 2 - à venir</div>
        <div className="project-card-skills">Machin | Truc | Bidule</div>
        <img src={hackathon} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Hackathon de 48 heures, dates, projet de groupe qui a pour objectif
            de blablabla.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="https://github.com/wendybaque/site-auteure">
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a href="efcaerc">Voir le site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">Workshop - Menu de restaurant</div>
        <div className="project-card-skills">React props et state</div>
        <img src={resto} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Exercice d&apos; études visant à mettre en pratique les props et le
            state de React pour créer un menu de restaurant dynamique en
            fonction des actions de l&apos;utilisateur.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="https://codesandbox.io/s/r27u2l?file=/public/index.html">
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a href="https://r27u2l.csb.app/">Voir le site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">
          Workshop - Citations des Simpsons
        </div>
        <div className="project-card-skills">React fetch, axios et API</div>
        <img src={simpsons} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Exercice d&apos; études visant à fetcher les données d&apos;une AP
            avec React. Si l&apos;on clique sur le bouton, une citation de
            Simpson aléatoire apparaît.
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="https://codesandbox.io/s/0b4euv">Voir le code</a>
            </div>
            <div className="links-page">
              <a href="https://0b4euv.csb.app/">Voir le site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-title">
          Tech Challenge - entrée à la Wild Code School
        </div>
        <div className="project-card-skills">HTML5 | CSS3 | Javascript</div>
        <img src={techchallenge} alt="logo" className="project-card-img" />
        <div className="project-card-description">
          <p>
            Tech challenge pour l&apos;entrée à la Wild Code School, mon premier
            code, mes premières expériences... qui m&apos;ont permis
            d&apos;accéder à cette super formation !
          </p>
          <div className="project-card-links">
            <div className="links-github">
              <a href="https://codesandbox.io/s/techchallenge-web-dev-starter-forked-pbldt?file=/index.html">
                Voir le code
              </a>
            </div>
            <div className="links-page">
              <a href="https://pbldt.csb.app/">Voir le site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

// import { projects } from "./data";

// function ProjectCard({ img, link }) {
//   return (
//     <div className="product">
//       <div className="project-browser">
//         <div className="project-circle" />
//         <div className="project-circle" />
//         <div className="project-circle" />
//         <a href={link} target="_blank" rel="noreferrer">
//           <img src={img} alt="my projects" className="project-img" />
//         </a>
//       </div>
//     </div>
//   );
// }
// export default ProjectCard;

// function ProjectCard({ name, img, link }) {
//   return (
//     <div className="product">
//       <div className="project-browser">
//         <div className={name} />
//         <div className="project-circle" />
//         <div className="project-circle" />
//         <div className="project-circle" />
//         <a href={link} target="_blank" rel="noreferrer">
//           <img src={img} alt="my projects" className="project-img" />
//         </a>
//       </div>
//     </div>
//   );
// }
// export default ProjectCard;
