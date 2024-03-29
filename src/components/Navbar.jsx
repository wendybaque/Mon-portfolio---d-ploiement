import React from "react";
import Wendy from "../assets/wendycarré.webp";

const Navbar = () => {
  return (
    <div>
      <nav
        role="navigation"
        aria-label="Barre de navigation"
        className="bg-slate-50 border-slate-100 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
      >
        <div className=" font-poppins container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="/"
            className="flex items-center"
            alt="redirection vers la page d'accueil"
          >
            <img src={Wendy} className="h-6 mr-3 sm:h-9" alt="Wendy Baqué" />
            <span className="text-xl font-poppins text-sky-800 self-center font-semibold whitespace-nowrap dark:text-white">
              Wendy Baqué
            </span>
          </a>
          <div
            className="drop-shadow-2xl	hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#intro"
                  className="text-lg block py-2 pl-3 pr-4 text-sky-800 dark:text-white"
                  aria-current="page"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg block py-2 pl-3 pr-4 text-sky-800 dark:text-white"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-lg block py-2 pl-3 pr-4 text-sky-800 dark:text-white"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg block py-2 pl-3 pr-4 text-sky-800 dark:text-white"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#wendev"
                  className="text-lg block py-2 pl-3 pr-4 text-sky-800 dark:text-white"
                >
                  Mon entreprise
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg block py-2 pl-3 pr-4 text-sky-800 dark:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
