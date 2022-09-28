import React from "react";
import "./projectcard.css";

const data = [
  {
    id: 1,
    title: "Application Fedmind",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63341e0c0f61e.png",
    techno: "Non Code | Glide App",
    descr:"Application Fedmind co-réalisée avec l'équipe de travail. Intégration d'outils no-code, onboarding par étapes, conditions de visibilités des éléments, etc.",
    code: "cfvgbhnjkl",
    page: "https://www.hebergeur-image.com/upload/88.174.47.6-63341e0c0f61e.png",
  },
  {
    id: 1,
    title: "FedAlert' | Fedmind",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-62fcef329c210.png",
    techno: "React | react-chatbot-kit",
    descr:"Chatbot réalisé dans le cadre de mon stage chez Fedmind. FedAlert' est une application permettant de désamorcer les crises du comportement alimentaire.",
    code: "https://github.com/Fedmind/Fed-Alert-ChatBot-React",
    page: "https://fed-alert-chat-bot-react.vercel.app/",
  },

  {
    id: 2,
    title: "Blog de chroniqueuse",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62d80df892b46.png",
    techno: "React | MongoDB ",
    descr:
      "Création de mon blog de chroniqueuse, avec authentification et upload d'images, possibilité de créer, de modifier et de supprimer des articles. En cours de déploiement du backend.",
    code: "https://github.com/wendybaque/Blog-Antiigone",
    page: "https://blogantiigone.vercel.app/",
  },

  {
    id: 3,
    title: "Site d'auteure",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62d80e24d5f88.png",
    techno: "React | Tailwindcss",
    descr:
      "Création de mon site d'auteure pour présenter mes romans et mon parcours littéraire",
    code: "https://github.com/wendybaque/site-auteure",
    page: "https://site-auteure.vercel.app/",
  },

  {
    id: 4,
    title: "Marvel quiz",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-6316011f2e0ba.png",
    techno: "React | fetch d'API | Firebase",
    descr:
      "Application de quiz sur le thème de Marvel, réalisée dans le cadre du cours Udemy sur React, avec déploiement sur Firebase.",
    code: "https://github.com/wendybaque/Marvel-Quiz-React",
    page: "https://marvel-quiz-91110.web.app/",
  },

  {
    id: 5,
    title: "Redux Book",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-6315fec888163.png",
    techno: "React | Redux | fetch d'API | Bootstrap",
    descr:
      "Application de librairie, avec ajout, recherche et suppression de livres, réalisée dans le cadre du cours Udemy sur Redux.",
    code: "https://github.com/wendybaque/React-Redux-Book-App",
    page: "https://react-redux-book-app.vercel.app/",
  },

  {
    id: 4,
    title: "Project for fun | English dictionnary",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-62df9faeb10b7.png",
    techno: "React | Tailwindcss | Fetch d'API",
    descr:
      "Création d'un dictionnaire en anglais, responsive. Cela m'a permis de consolider mes acquis dans le fetch d'API et dans l'utilisation des Hooks de React.",
    code: "https://github.com/wendybaque/Fun-dictionnary",
    page: "https://fun-dictionnary.vercel.app/",
  },
  
  {
    id: 5,
    title: "Project for fun | List API",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-62df9fdb21e59.png",
    techno: "React | Tailwindcss | Font awesome | Fetch d'API",
    descr:
      "Création d'un module responsive de recherche d'API avec filtre par thématique. Cela m'a permis de consolider mes acquis dans l'application des Hooks de React",
    code: "https://github.com/wendybaque/Fun-API-list",
    page: "https://fun-api-list.vercel.app/",
  },
  

  {
    id: 6,
    title: "Projet de groupe 1 - KodeWork",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a0f6b79f7.png",
    techno: "HTML5 | CSS3 | Javascript",
    descr:
      "Site internet responsive permettant de mettre en relation professionnels et particuliers pour trouver des lieux de coworking partout en France.",
    code: "https://github.com/SAUCYCorentin/coworking-project1",
    page: "https://wendybaque.github.io/coworking-project1/",
  },

  {
    id: 7,
    title: " Projet de groupe 2 - Mood, une application de choix",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a24c900a9.png",
    techno: "React & Hooks | API Rest",
    descr:
      "Site internet responsive permettant de fair une association entre films et pizzas, si on ne sait pas quoi regarder ou si on hésite sur la composition de notre pizza ! Un peu de fun pour tester en groupe toutes les fonctionnalités qu'offre React.",
    code: "https://github.com/WildCodeSchool/2022-03-RemoteJS-Erreur404-tortues-ninjas",
    page: "https://mood-une-application-de-choix.netlify.app/home",
  },

  {
    id: 8,
    title: "Projet de groupe 3 - Plateforme Rookies",
    img: "https://images.squarespace-cdn.com/content/v1/60de0a8851ebfc1f3d756b1d/23b99f13-8fd7-418e-b7db-fabda803b9c9/PNG-Transparent-high-resolution.png?format=1500w",
    techno: "React | Tailwind | Express.js | Node.js",
    descr:
      "Plateforme de mise en relation d'entreprises et d'écoles autour de projets d'études pour faciliter les rencontres, l'accompagnement et l'aboutissement de projets. J'y ai tenu le rôle de Product Owner.",
    code: "https://github.com/WildCodeSchool/2022-03-JS-Remote-404-Rookies-Project-App",
    page: "cfvgyuhbijn",
  },

  {
    id: 9,
    title: "Hackathon 1 - Save Ourselves",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62cee79a668dd.png",
    techno: "React & Hooks | API Rest | Tailwind",
    descr:
      "Hackathon de 48 heures sur le thème de l'écologie, par groupe de 4 personnes, sur tous les campus de la Wild Code School. Nous avons réalisé une application responsive permettant de mesurer l'empreinte écologique d'un utilisateur en fonction de ses éco-gestes.",
    code: "https://github.com/wendybaque/hackathon.git",
    page: "tvygi",
  },

  {
    id: 10,
    title: "Hackathon 2 - Apside",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62bfc445c7374.png",
    techno: "React | Tailwindcss",
    descr: "Hackathon de 72h pour l'entreprise Apside, par groupe de 5 développeurs, sur tous les campus de la Wild Code School. Plateforme de gestion de projets en interne.",
    code: "https://github.com/Damien-Dupont/hackathon2",
    page: "ctf",
  },
  {
    id: 11,
    title: "Checkpoint 4 | Ma bibliothèque numérique",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63341e52cedf5.png",
    techno: "React | Tailwindcss | Express/Node | MySQL | Firebase",
    descr: "Exercice de fin d'études, mêlant toutes mes compétences en front-end et back-end pour créer mon blog de chroniqueuse littéraire. Création d'une bibliothèque numérique. En cours de déploiement du backend.",
    code: "https://github.com/wendybaque/Checkpoint-4",
    page: "https://checkpoint-4-wendybaque.vercel.app/",
  },

  {
    id: 12,
    title: "Checkpoint 3",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62bfc6b11c249.png",
    techno: "MySQL | Express.js | Node.js | React",
    descr: "Exercice d'études, création d'un jeu de recherche de trésor sur une carte, dans le but de valider mes acquis en développement back-end.",
    code: "https://github.com/wendybaque/Checkpoint-3",
    page: "ctf",
  },


  // {
  //   id: 13,
  //   title: "Workshop - Menu de restaurant",
  //   img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a18381a86.png",
  //   techno: "React props and state",
  //   descr:
  //     "Exercice d'études visant à mettre en pratique les props et le state de React pour créer un menu de restaurant dynamique en fonction des actions de l'utilisateur.",
  //   code: "https://codesandbox.io/s/r27u2l?file=/public/index.html",
  //   page: "https://r27u2l.csb.app/",
  // },

  // {
  //   id: 14,
  //   title: "Workshop - Citations des Simpsons",
  //   img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a1c1651ab.png",
  //   techno: "React fetch, axios et API",
  //   descr:
  //     "Exercice d'études visant à fetcher les données d'une API avec React. Si l'on clique sur le bouton, une citation de Simpson aléatoire apparaît.",
  //   code: "https://codesandbox.io/s/0b4euv",
  //   page: "https://0b4euv.csb.app/",
  // },

  {
    id: 15,
    title: "Todolist - Bootstrap",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-62fcefff58994.png",
    techno: "Bootstrap | React",
    descr:
      "A todo-list app with Bootstrap and React to learning useState Hook. ",
    code: "https://github.com/wendybaque/Bootstrap-List",
    page: "https://bootstrap-todolist.netlify.app/",
  },

  {
    id: 16,
    title: "Workshop - Calculatrice",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62b2e8e0c8088.png",
    techno: "HTML | CSS | Javascript",
    descr:
      "Premier Workshop visant à créer une calculatrice en Javascript + module The Price is Right avec une fenêtre popup.",
    code: "https://github.com/wendybaque/Workshop-Calculator-",
    page: "https://wendybaque.github.io/Workshop-Calculator-/",
  },

  {
    id: 17,
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
          <div className="card-project" aria-label="carte de projets réalisés par Wendy Baqué">
            <div className="top" aria-label="au de la carte projet avec leurs logos">
              <h2 className="card-title">{d.title}</h2>
              <img src={d.img} alt="logo du projet réalisé par Wendy Baqué" className="card-img" />
            </div>
            <div className="center" aria-label="centre de la carte projet">
              <h3>{d.techno}</h3>
              <p>{d.descr}</p>
            </div>
            <div className="bottom">
              <div className="project-card-links" aria-label="bas de la carte avec liens vers le code et les sites">
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
