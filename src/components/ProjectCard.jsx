import React from "react";

const data = [
  {
    id: 1,
    title: "Site internet de WenDev",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-641aca03aa042.png",
    techno: "React | Tailwindcss | Jotform | Calendly | Axeptio | Hostinger ",
    descr:
      "Site de mon entreprise, avec intégration de modules no-code, outils de statistiques des données et hébergement référencé.",
    code: "https://github.com/wendevweb/site-wendev",
    page: "https://www.wendev.fr/",
  },
  {
    id: 2,
    title: "Site web de Farah D. auteure",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-64634645daedb.png",
    techno: "No Code | Hostinger website builder | SEO",
    descr: "Création du site web de l'auteure, offre Premium de WenDev",
    code: "https://www.wendev.fr/Offreauteurs",
    page: "https://farahdauteure.com",
  },
  {
    id: 3,
    title: "Site pour mes activités d'auteure",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63db7ce5436f1.png",
    techno: "React | Tailwindcss",
    descr:
      "Création de mon site d'auteure pour présenter mes romans et mon parcours littéraire",
    code: "https://github.com/wendybaque/site-auteure",
    page: "https://wendybaqueauteure.wendev.fr/",
  },
  {
    id: 4,
    title: "Site web front-end - Association Nelixair",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-64326d3d4337c.png",
    techno: "React | Tailwindcss",
    descr:
      "Mission bénévole chez Nelixair, une association mettant en avant l'aviation virtuelle. En charge de la partie front-end et de l'interface web.",
    code: "https://github.com/wendybaque/Nelixair-website-front-end-copy",
    page: "https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/",
  },
  {
    id: 5,
    title: "Ma bibliothèque numérique",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-636384ef6e5e7.png",
    techno: "React | Tailwindcss | Express/Node | MySQL",
    descr:
      "Projet présenté lors de mon passage de diplôme RNCP, mêlant toutes mes compétences en front-end et back-end pour créer une application responsive de gestion de lectures, avec authentification et base de données. En cours de déploiement backend.",
    code: "https://github.com/wendybaque/Ma-bibliotheque-numerique",
    page: "https://mabibliothequenumerique.vercel.app/",
  },
  {
    id: 6,
    title: "Module Alerte - O Media",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63f37d572d207.png",
    techno: "React | react-chatbot-kit",
    descr:
      "Chatbot réalisé dans le cadre de mon stage chez O Media. Adaptation à la nouvelle charte graphique, avec de nouveaux chemins et exercices pour les utilisateurs et intégration à la nouvelle application.",
    code: "https://github.com/wendybaque/Module-Alert-Deploy",
    page: "https://module-alert-deploy.vercel.app/",
  },
  {
    id: 7,
    title: "Happy Frontend Component",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-639ae7498ff6b.png",
    techno: "React | Tailwind | HTML & CSS",
    descr:
      "Répertoire de composants front-end pour illustrer mes compétences et créer de nouveaux designs.",
    code: "https://github.com/wendybaque/Happy-Frontend-Components",
    page: "https://happy-frontend-components.vercel.app/",
  },
  {
    id: 8,
    title: "Snapface",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-64709cc7642c4.png",
    techno: "Angular | Scss | Regex",
    descr:
      "Application réalisée dans le cadre de mon apprentissage en autonomie sur OpenClassroom pour intégrer les différents concepts d'Angular.",
    code: "https://github.com/wendybaque/Snapface-Openclassroom",
    page: "https://snapface-openclassroom.vercel.app/",
  },
  {
    id: 9,
    title: "React Admin Panel",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63cfb0d2ac260.png",
    techno: "React | Firebase | Sass | MUI components",
    descr:
      "Dashboard professionnel pour ordinateur de bureau, avec la possibilité de s'authentifier, upload d'images, darkmode et base de données interactive.",
    code: "https://github.com/wendybaque/React-Admin-Panel",
    page: "https://react-admin-panel-tau.vercel.app/",
  },

  {
    id: 10,
    title: "Firebase Chat !",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63c54257c354e.png",
    techno: "React | Firebase | Sass",
    descr:
      "Application de chat en direct, avec création de profil (authentification) et upload d'images, grâce à Firebase et React.",
    code: "https://github.com/wendybaque/firebase-chat",
    page: "https://firebase-chat-wendybaque.vercel.app/login",
  },
  {
    id: 11,
    title: "Social Media App",
    img: "https://www.hebergeur-image.com/upload/37.169.170.102-6374dbe9c7392.png",
    techno: "React Query | Sass | Express/Node | MySQL",
    descr:
      "Application fullstack de réseau social pour mettre en pratique React Query et mettre en place des opérations CRUD avec tablea de jointure MySQL. En cours de déploiement backend.",
    code: "https://github.com/wendybaque/Social-Media-App-Mysql",
    page: "https://social-media-app-mysql.vercel.app/login",
  },
  {
    id: 12,
    title: "Application Fedmind",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63341e0c0f61e.png",
    techno: "No Code | Glide App",
    descr:
      "Application Fedmind co-réalisée avec l'équipe de travail. Intégration d'outils no-code, onboarding par étapes, conditions de visibilités des éléments, etc.",
    code: "cfvgbhnjkl",
    page: "https://www.hebergeur-image.com/upload/88.174.47.6-63341e0c0f61e.png",
  },
  {
    id: 13,
    title: "FedAlert' - Fedmind",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63ff10c92ca4b.png",
    techno: "React | react-chatbot-kit",
    descr:
      "Chatbot réalisé dans le cadre de mon stage chez Fedmind. FedAlert' est une application permettant de désamorcer les crises du comportement alimentaire.",
    code: "https://github.com/Fedmind/Fed-Alert-ChatBot-React",
    page: "https://fed-alert-chat-bot-react.vercel.app/",
  },

  {
    id: 14,
    title: "Blog de chroniqueuse",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62d80df892b46.png",
    techno: "React | MongoDB ",
    descr:
      "Création de mon blog de chroniqueuse, avec authentification et upload d'images, possibilité de créer, de modifier et de supprimer des articles. En cours de déploiement du backend.",
    code: "https://github.com/wendybaque/Blog-Antiigone",
    page: "https://blogantiigone.vercel.app/",
  },
  {
    id: 15,
    title: "Shiny Agency ",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63ff12138454f.png",
    techno: "React | Fetch d'API | Backend | Styled Components | Tests",
    descr:
      "Site d'une agence web fictive pour approfondir mes compétences en React grâce au cours OpenClassroom.",
    code: "https://github.com/wendybaque/Shiny-Agency",
    page: "https://www.xctfvgyuhbijnok.com",
  },

  {
    id: 16,
    title: "test technique - Chat box",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63ff12af021c5.png",
    techno: "Javascript | Websockets | Socket.io",
    descr:
      "Test technique pour un organisme de formation tech. Chat box interactive et instantanée.",
    code: "https://github.com/wendybaque/Chat-box-Javascript-Evogue",
    page: "https://chat-box-javascript-evogue-7fu3pysbq-wendybaque.vercel.app/",
  },

  {
    id: 17,
    title: "Marvel quiz",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-6316011f2e0ba.png",
    techno: "React | fetch d'API | Firebase",
    descr:
      "Application de quiz sur le thème de Marvel, réalisée dans le cadre du cours Udemy sur React, avec déploiement sur Firebase.",
    code: "https://github.com/wendybaque/Marvel-Quiz-React",
    page: "https://marvel-quiz-91110.web.app/",
  },
  {
    id: 17,
    title: "Redux Book",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-6315fec888163.png",
    techno: "React | Redux | fetch d'API | Bootstrap",
    descr:
      "Application de librairie, avec ajout, recherche et suppression de livres, réalisée dans le cadre du cours Udemy sur Redux.",
    code: "https://github.com/wendybaque/React-Redux-Book-App",
    page: "https://react-redux-book-app.vercel.app/",
  },
  {
    id: 18,
    title: "Project for fun - Harry Potter API",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63ff0f7794515.png",
    techno: "React | Fetch d'API | Styled Components",
    descr:
      "Application basique en React qui fetch une API sur Harry Potter et utilise Styled Components. Basée sur le tutoriel de Nonoduweb.",
    code: "https://github.com/wendybaque/Fun-Harry-Potter-",
    page: "https://fun-harry-potter.vercel.app/",
  },

  {
    id: 19,
    title: "Project for fun - English dictionnary",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63ff1024b01a3.png",
    techno: "React | Tailwindcss | Fetch d'API",
    descr:
      "Création d'un dictionnaire en anglais, responsive. Cela m'a permis de consolider mes acquis dans le fetch d'API et dans l'utilisation des Hooks de React.",
    code: "https://github.com/wendybaque/Fun-dictionnary",
    page: "https://fun-dictionnary.vercel.app/",
  },

  {
    id: 20,
    title: "Project for fun - List API",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63ff115bb0da3.png",
    techno: "React | Tailwindcss | Font awesome | Fetch d'API",
    descr:
      "Création d'un module responsive de recherche d'API avec filtre par thématique. Cela m'a permis de consolider mes acquis dans l'application des Hooks de React",
    code: "https://github.com/wendybaque/Fun-API-list",
    page: "https://fun-api-list.vercel.app/",
  },

  {
    id: 21,
    title: "Projet de groupe 1 - KodeWork",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a0f6b79f7.png",
    techno: "HTML5 | CSS3 | Javascript",
    descr:
      "Site internet responsive permettant de mettre en relation professionnels et particuliers pour trouver des lieux de coworking partout en France.",
    code: "https://github.com/SAUCYCorentin/coworking-project1",
    page: "https://wendybaque.github.io/coworking-project1/",
  },

  {
    id: 22,
    title: " Projet de groupe 2 - Mood, une application de choix",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62a9a24c900a9.png",
    techno: "React & Hooks | API Rest",
    descr:
      "Site internet responsive permettant d'associer films et pizzas, si on ne sait pas quoi regarder ou si on hésite sur la composition de notre pizza ! Un peu de fun pour tester en groupe toutes les fonctionnalités qu'offre React.",
    code: "https://github.com/WildCodeSchool/2022-03-RemoteJS-Erreur404-tortues-ninjas",
    page: "https://mood-une-application-de-choix.netlify.app/home",
  },

  {
    id: 23,
    title: "Projet de groupe 3 - Plateforme Rookies",
    img: "https://images.squarespace-cdn.com/content/v1/60de0a8851ebfc1f3d756b1d/23b99f13-8fd7-418e-b7db-fabda803b9c9/PNG-Transparent-high-resolution.png?format=1500w",
    techno: "React | Tailwind | Express.js | Node.js",
    descr:
      "Plateforme de mise en relation d'entreprises et d'écoles autour de projets d'études pour faciliter les rencontres, l'accompagnement et l'aboutissement de projets. J'y ai tenu le rôle de Product Owner.",
    code: "https://github.com/WildCodeSchool/2022-03-JS-Remote-404-Rookies-Project-App",
    page: "cfvgyuhbijn",
  },

  {
    id: 24,
    title: "Hackathon 1 - Save Ourselves",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62cee79a668dd.png",
    techno: "React & Hooks | API Rest | Tailwind",
    descr:
      "Hackathon de 48 heures sur le thème de l'écologie, par groupe de 4 personnes, sur tous les campus de la Wild Code School. Nous avons réalisé une application responsive permettant de mesurer l'empreinte écologique d'un utilisateur en fonction de ses éco-gestes.",
    code: "https://github.com/wendybaque/hackathon.git",
    page: "tvygi",
  },

  {
    id: 25,
    title: "Hackathon 2 - Apside",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62bfc445c7374.png",
    techno: "React | Tailwindcss",
    descr:
      "Hackathon de 72h pour l'entreprise Apside, par groupe de 5 développeurs, sur tous les campus de la Wild Code School. Plateforme de gestion de projets en interne.",
    code: "https://github.com/Damien-Dupont/hackathon2",
    page: "ctf",
  },
  {
    id: 26,
    title: "Checkpoint 4",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-63341e52cedf5.png",
    techno: "React | Tailwindcss | Express/Node | MySQL",
    descr:
      "Exercice de fin d'études, mêlant toutes mes compétences en front-end et back-end pour créer une application de gestion de lectures. Prémices de mon projet de présentation pour le diplôme RNCP.",
    code: "https://github.com/wendybaque/Checkpoint-4",
    page: "https://checkpoint-4-wendybaque.vercel.app/",
  },

  {
    id: 27,
    title: "Checkpoint 3",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62bfc6b11c249.png",
    techno: "MySQL | Express.js | Node.js | React",
    descr:
      "Exercice d'études, création d'un jeu de recherche de trésor sur une carte, dans le but de valider mes acquis en développement back-end.",
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
    id: 28,
    title: "Project for fun - Christmas Card",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-6388b4a58f8dd.png",
    techno: "Javascript | HTML | CSS",
    descr:
      "Application basique en Javascript pour créer et personnaliser sa carte de Noël.",
    code: "https://github.com/wendybaque/Christmas-card",
    page: "https://christmas-card-zeta.vercel.app/",
  },
  {
    id: 29,
    title: "Todolist - Bootstrap",
    img: "https://www.hebergeur-image.com/upload/88.174.47.6-62fcefff58994.png",
    techno: "Bootstrap | React",
    descr:
      "A todo-list app with Bootstrap and React to learning useState Hook. ",
    code: "https://github.com/wendybaque/Bootstrap-List",
    page: "https://bootstrap-todolist.netlify.app/",
  },

  {
    id: 30,
    title: "Workshop - Calculatrice",
    img: "https://www.hebergeur-image.com/upload/176.154.198.164-62b2e8e0c8088.png",
    techno: "HTML | CSS | Javascript",
    descr:
      "Premier Workshop visant à créer une calculatrice en Javascript + module The Price is Right avec une fenêtre popup.",
    code: "https://github.com/wendybaque/Workshop-Calculator-",
    page: "https://wendybaque.github.io/Workshop-Calculator-/",
  },

  {
    id: 31,
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
    <div aria-label="cartes des projets de Wendy Baqué">
      <div className="lg:grid lg:grid-cols-4 lg:gap-10">
        {data.map((d) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-64 w-full" src={d.img} alt="" />
            <div className="p-5">
              <h5 className="font-poppins text-center text-2xl tracking-tight text-gray-900 dark:text-white">
                {d.title}
              </h5>
              <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                {d.descr}
              </p>
              <div className="flex flex-col items-center">
                <button className="p-6">
                  <a
                    href={d.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Voir le code
                  </a>
                </button>
                <button>
                  <a
                    href={d.page}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
