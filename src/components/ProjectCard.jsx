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
      "Hackathon de 48 heures sur le thème de l'écologie, par groupe de 4 personnes, sur toute la Wild Code School. Nous avons réalisé une application responsive permettant de mesurer l'empreinte écologique d'un utilisateur en fonction de ses éco-gestes.",
    code: "https://github.com/KevinLavigne/hackathon",
    page: "tvygi",
  },

  {
    id: 6,
    title: "Hackathon 2 - à venir",
    img: "https://media.istockphoto.com/vectors/hackathon-banner-illustration-abstract-futuristic-background-with-vector-id1213258486?k=20&m=1213258486&s=612x612&w=0&h=VAGuLo8tudThWWKQefdymlnqMwjGm0Elt8x_8fRpZK4=",
    techno: "à venir",
    descr: "à venir",
    code: "gvhbjn",
    page: "ctfyvguhbijn",
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
