import React from "react";
import "./projectcard.css";

const data = [
  {
    id: 1,
    title: "Site d'auteure",
    img: "https://simplement.pro/asc/public/upload/faces/4323.jpg?rev=1613986074",
    techno: "React",
    descr:
      "Création de mon site d'auteure pour présenter mes romans et mon parcours littéraire",
    code: "https://github.com/wendybaque/site-auteure",
    page: "https://wendybaqueauteurederomans.netlify.app/",
  },

  {
    id: 2,
    title: "Projet de groupe 1 - KodeWork",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a0f6b79f7.png",
    techno: "HTML5 | CSS3 | Javascript",
    descr:
      "Site internet responsive permettant de mettre en relation professionnels et particuliers pour trouver des lieux de coworking partout en France.",
    code: "https://github.com/SAUCYCorentin/coworking-project1",
    page: "https://wendybaque.github.io/coworking-project1/",
  },

  {
    id: 3,
    title: " Projet de groupe 2 - Mood, une application de choix",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a24c900a9.png",
    techno: "React & Hooks | API Rest",
    descr:
      "Site internet responsive permettant de fair une association entre films et pizzas, si on ne sait pas quoi regarder ou si on hésite sur la composition de notre pizza ! Un peu de fun pour tester en groupe toutes les fonctionnalités qu'offre React.",
    code: "https://github.com/WildCodeSchool/2022-03-RemoteJS-Erreur404-tortues-ninjas",
    page: "https://mood-une-application-de-choix.netlify.app/home",
  },

  {
    id: 4,
    title: "Projet de groupe 3 - Plateforme Rookies",
    img: "https://images.squarespace-cdn.com/content/v1/60de0a8851ebfc1f3d756b1d/23b99f13-8fd7-418e-b7db-fabda803b9c9/PNG-Transparent-high-resolution.png?format=1500w",
    techno: "React | Tailwind | Express.js | Node.js",
    descr:
      "Plateforme de mise en relation d'entreprises et d'écoles autour de projets d'études pour faciliter les rencontres, l'accompagnement et l'aboutissement de projets.",
    code: "https://github.com/WildCodeSchool/2022-03-JS-Remote-404-Rookies-Project-App",
    page: "cfvgyuhbijn",
  },

  {
    id: 5,
    title: "Hackathon 1 - Save Ourselves",
    img: "https://media-exp1.licdn.com/dms/image/C4E22AQGWeeNrMALezg/feedshare-shrink_800/0/1652703704983?e=1657152000&v=beta&t=QSi_E_UVOrPS7in8O57ic8OD8JY5CKyqpQgJk_7uDQk",
    techno: "React & Hooks | API Rest | Tailwind",
    descr:
      "Hackathon de 48 heures sur le thème de l'écologie, par groupe de 4 personnes, sur tous les campus de la Wild Code School. Nous avons réalisé une application responsive permettant de mesurer l'empreinte écologique d'un utilisateur en fonction de ses éco-gestes.",
    code: "https://github.com/KevinLavigne/hackathon",
    page: "tvygi",
  },

  {
    id: 6,
    title: "Hackathon 2 - Apside",
    img: "data:image/jpeg;base64,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",
    techno: "React | Tailwindcss",
    descr: "Hackathon de 72h pour l'entreprise Apside, par groupe de 5 développeurs, sur tous les campus de la Wild Code School. Plateforme de gestion de projets en interne.",
    code: "https://github.com/Damien-Dupont/hackathon2",
    page: "ctf",
  },

  {
    id: 7,
    title: "Workshop - Menu de restaurant",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a18381a86.png",
    techno: "React props and state",
    descr:
      "Exercice d'études visant à mettre en pratique les props et le state de React pour créer un menu de restaurant dynamique en fonction des actions de l'utilisateur.",
    code: "https://codesandbox.io/s/r27u2l?file=/public/index.html",
    page: "https://r27u2l.csb.app/",
  },

  {
    id: 8,
    title: "Workshop - Citations des Simpsons",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a1c1651ab.png",
    techno: "React fetch, axios et API",
    descr:
      "Exercice d'études visant à fetcher les données d'une API avec React. Si l'on clique sur le bouton, une citation de Simpson aléatoire apparaît.",
    code: "https://codesandbox.io/s/0b4euv",
    page: "https://0b4euv.csb.app/",
  },

  {
    id: 9,
    title: "Workshop - Calculatrice",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62b2e8e0c8088.png",
    techno: "HTML | CSS | Javascript",
    descr:
      "Premier Workshop visant à créer une calculatrice en Javascript + module The Price is Right avec une fenêtre popup.",
    code: "https://github.com/wendybaque/Workshop-Calculator-",
    page: "https://wendybaque.github.io/Workshop-Calculator-/",
  },

  {
    id: 10,
    title: "Tech Challenge - entrée à la Wild Code School",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a2c1744bb.png",
    techno: "HTML5 | CSS3 | Javascript",
    descr:
      "Tech challenge pour l'entrée à la Wild Code School, mon premier code, mes premières expériences... qui m'ont permis d'accéder à cette super formation !",
    code: "https://codesandbox.io/s/techchallenge-web-dev-starter-forked-pbldt?file=/index.html",
    page: "https://pbldt.csb.app/",
  },
];
export default function ProjectCard() {
  return (
    <div className="cards" id="cards">
      <div className="cards-container">
        {data.map((d) => (
          <div className="card-project">
            <div className="top">
              <h2 className="card-title">{d.title}</h2>
              <img src={d.img} alt="logo du projet réalisé par Wendy Baqué" className="card-img" />
            </div>
            <div className="center">
              <h3>{d.techno}</h3>
              <p>{d.descr}</p>
            </div>
            <div className="bottom">
              <div className="project-card-links">
                <div className="links-github">
                  <a href={d.code} target="_blank" rel="noreferrer">
                    Voir le code
                  </a>
                </div>
                <div className="links-page">
                  <a href={d.page} target="_blank" rel="noreferrer">
                    Voir le site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
