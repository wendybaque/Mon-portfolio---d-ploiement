import React from "react";

import cvportfolio from "../assets/newcvcode.webp";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function About() {
  return (
    <div
      id="about"
      className="font-poppins lg:flex flex-row lg:m-6"
      aria-label="Page de présentation de Wendy Baqué"
    >
      <section className="basis-1/2 lg:ml-10 lg:p-6">
        <p className="font-poppins p-4 text-xl">
          ✨ Je suis une personne{" "}
          <span className="font-bold text-sky-800">rigoureuse</span>, ce qui me
          permet de mener à bien mes projets et activités confiées de A à Z et
          de bien gérer mon temps de travail. Je fais également preuve de{" "}
          <span className="font-bold text-sky-800">
            créativité et d'imaginativité
          </span>
          , ce qui me pousse à trouver des{" "}
          <span className="font-bold text-sky-800">
            solutions innovantes et originales
          </span>{" "}
          pour répondre aux besoins des clients.
        </p>
        <p className="font-poppins p-4 text-xl">
          ✨Soucieuse d’améliorer ma pratique dans un monde en constante
          évolution, je sais faire preuve d’
          <span className="font-bold text-sky-800">adaptabilité</span>, comme le
          prouve ma reconversion professionnelle dans un domaine totalement
          nouveau pour moi.
        </p>
        <p className="font-poppins  p-4 text-xl">
          ✨ Etre <span className="font-bold text-sky-800">autonome</span> dans
          ma pratique est important pour moi afin d'envisager tous les possibles
          qui s'offrent à moi et repose avant tout sur un{" "}
          <span className="font-bold text-sky-800">climat de confiance</span>{" "}
          établi avec le client. Lui être utile apparaît aussi primordial pour
          donner un sens à mon travail.
        </p>
        <p className="font-poppins p-4 text-xl">
          ✨ Enfin, ma <span className="font-bold text-sky-800">curiosité</span>{" "}
          me donne un goût certain pour l'apprentissage et l'actualisation de
          mes acquis dans un monde en constante évolution.
        </p>
        <p className="font-poppins p-4 text-xl">
          🎯 Ainsi, mon <span className="font-bold text-sky-800">objectif</span>{" "}
          est de m'épanouir dans un métier porteur d'avenir et de sens, me
          permettant de mettre à profit mes points forts au service de mes
          clients, de mes collaborateurs et de votre entreprise.
        </p>
        <p className="font-poppins p-4 text-xl">
          🚀 Les valeurs les plus importantes dans le monde du travail sont,
          selon moi,{" "}
          <span className="font-bold text-sky-800">
            l’entraide, l’écoute, l’expression de soi, l’épanouissement et la
            réussite.
          </span>
        </p>
        <p className="font-poppins p-4 text-xl">
          📚 Je suis aussi auteure de{" "}
          <span className="font-bold text-sky-800">4 romans contemporains</span>{" "}
          sur des thématiques qui me tiennent à coeur : la santé mentale,
          l'acceptation de soi, la quête de sens, la Vie, la musique et la fin
          de vie. Cela me permet de développer des compétences
          organisationnelles, de maîtriser les normes rédactionnelles et,
          surtout, d'être à l' avec le{" "}
          <span className="font-bold text-sky-800">storytelling</span> lorsque
          j' un projet à présenter aux clients et collaborateurs.
        </p>
        <a
          href="https://wendybaqueauteure.wendev.fr/"
          alt="Se rendre sur le site de Wendy Baqué, auteure de romans"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" text-l p-6 m-6 rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Voir mon site d'auteure
          </button>
        </a>
        <p className="font-poppins p-4 text-xl">
          ➕{" "}
          <span className="font-bold text-sky-800 animate-pulse">
            Mon petit plus ?
          </span>
          Je suis développeuse, mais aussi psychologue ! Ainsi, tout
          naturellement, je suis attirée par l' UX et l' UI. C'est un domaine
          qui me parle, et qui me tient toujours à cœur. Mon regard est un bonus
          : 100% user first et centrage sur l'accessibilité !
        </p>
        <p className="font-poppins p-4 text-xl">
          ➕{" "}
          <span className="font-bold text-sky-800 animate-pulse">
            Mon autre petit plus ?{" "}
          </span>
          Je suis no code friendly ! Face à la demande croissante sur des outils
          de solutions en ligne clés en mains, je peux vous aider à augmenter
          votre productivité et votre efficacité grâce à des outils comme
          Airtable, Glideapps, ou encore Zapier. Je vous propose également des
          création de votre landing page sur Carrd.io, Softr ou Glidepages.
        </p>
        <p className="font-poppins p-4 text-xl">
          🗺️ Habituée au télétravail et résidant vers{" "}
          <span className="font-bold text-sky-800">Tours (37)</span>, cela reste
          l'une de mes priorités.
        </p>
      </section>
      <section className="basis-1/2 ml-10 p-6 flex flex-col">
        <img
          src={cvportfolio}
          alt="curriculum vitae de Wendy Baqué"
          className="rounded-lg drop-shadow-2xl"
        />
        <a
          href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:162e5941-1d99-31b6-921d-8b32c8ce80f0"
          alt="Télécharger le CV de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
        >
          <button className="p-6 m-6 animate-pulse rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <PictureAsPdfIcon /> Télécharger mon CV
          </button>
        </a>
      </section>
    </div>
  );
}
export default About;
