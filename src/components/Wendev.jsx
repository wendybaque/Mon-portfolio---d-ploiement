import React from "react";
import logowendev from "../assets/Logo noir.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

const Wendev = () => {
  return (
    <div
      className="font-poppins lg:flex flex-row lg:m-6"
      aria-label="Wendev, l'entreprise de Wendy Baqué"
    >
      <section className="basis:1/2 lg:ml-10 lg:p-6">
        <img
          src={logowendev}
          alt="WenDev"
          className="m-4 rounded-md shadow-md w-52"
        />
      </section>
      <section className="basis:1/2 lg:ml-10 lg:p-6">
        <p className="font-poppins p-4 text-xl">
          En 2023, j'ai créé{" "}
          <span className="font-bold text-fuchsia-500">WenDev</span>, ma micro
          entreprise de création de solutions numériques sur mesure. Grâce à mes
          compétences en code et en no-code, je peux à présent proposer un large
          panel de services à mes clients, avec qui je favorise une relation de
          confiance grâce à l'écoute active et à mon empathie.
        </p>
        <p className="font-poppins p-4 text-xl">
          J'ai également pour ambition d'être un{" "}
          <span className="font-bold text-fuchsia-500">média de référence</span>{" "}
          pour les novices en code, en proposant du contenu adapté à leurs
          besoins pour se lancer, sur mes différents réseaux sociaux.
        </p>
        <a
          href="https://www.instagram.com/wendevweb/"
          alt="Se rendre sur le compte Instagram de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-fuchsia-500">
            <InstagramIcon /> En savoir plus
          </button>
        </a>
        <p className="font-poppins p-4 text-xl">
          Enfin, je propose une{" "}
          <span className="font-bold text-fuchsia-500">
            offre spéciale pour mes collègues auteurs
          </span>{" "}
          afin de leur offrir une meilleure visibilité et l'opportunité de
          toucher de nouveaux lecteurs grâce au web, avec un tarif adapté à leur
          budget.
        </p>
        <a
          href="https://www.wendev.fr/Offreauteurs"
          alt="Découvrir l'offre spéciale auteurs de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className="animate-pulse text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-fuchsia-500">
            Découvrir l'offre
          </button>
        </a>
        <p className="font-poppins p-4 text-xl">Voici mes autres services :</p>
        <a
          href="https://www.wendev.fr/OffreSite"
          alt="Découvrir l'offre de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-violet-600">
            Création et refonte de sites internet
          </button>
        </a>
        <a
          href="https://www.wendev.fr/OffreMaquette"
          alt="Découvrir l'offre de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-violet-600">
            Maquettes pour le web
          </button>
        </a>
        <a
          href="https://www.wendev.fr/OffrePortfolio"
          alt="Découvrir l'offre de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-violet-600">
            Création de portfolios{" "}
          </button>
        </a>
        {/* <a
          href="https://www.wendev.fr/OffreGlide"
          alt="Découvrir l'offre de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-violet-600">
            Application mobile
          </button>
        </a> */}
        {/* <a
          href="https://www.wendev.fr/OffreChat"
          alt="Découvrir l'offre de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-violet-600">
            Chats et chatbots
          </button>
        </a> */}
        <a
          href="https://www.wendev.fr/OffreFirebase"
          alt="Découvrir l'offre de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-violet-600">
            Pages d'authentification avec Firebase
          </button>
        </a>
      </section>
    </div>
  );
};

export default Wendev;
