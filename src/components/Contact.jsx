import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import githubsvg from "../assets/github.svg";
import linkedinsvg from "../assets/linkedin.svg";
import Blob from "./Blob";

function Contact() {
  const notify = () =>
    toast("Merci pour votre message. Je vous répondrai au plus vite.");
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ijptha3",
        "template_7xuccag",
        formRef.current,
        "-F7_Yn5YXZZOlGfoZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="m-6 font-poppins text-xl lg:flex flex-row" aria-label="Page de contact">
      <section
        className="basis-1/3 lg:ml-10 p-6 justify-center justify-items-center	justify-self-center	items-center place-content-center	place-items-center"
        aria-label="Partie gauche de la page avec les coordonnées de contact de Wendy Baqué"
      >
        <div>
          <img
            src={phone}
            alt="pictogtamme de téléphone"
            className="w-24 h-24 lg:m-4 p-4"
          />{" "}
          <p className="text-sky-800 text-left">06 98 15 71 13</p>
        </div>
        <div className="contact-info-item">
          <img
            src={mail}
            alt="pictogramme d'enveloppe d'email"
            className="w-24 h-24 m-4 p-4"
          />{" "}
          <p className="text-sky-800 text-left">baque.wendy@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <img
            src={linkedinsvg}
            alt="pictogramme avec le logo de linkedin"
            className="w-24 h-24 m-4 p-4"
          />
          <a
            href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
            target="_blanck"
          >
            <p className="text-sky-800 text-left">Wendy Baqué</p>
          </a>
        </div>
        <div className="contact-info-item">
          <img
            src={githubsvg}
            alt="pictogramme avec le logo de github"
            className="w-24 h-24 m-4 p-4"
          />
          <a href="https://github.com/wendybaque" target="_blanck">
            <p className="text-sky-800 text-left">wendybaque</p>
          </a>
          <div className="md:invisible sm:invisible"><Blob /></div>
        </div>
      </section>
      <section
        className="basis-1/2 lg:ml-10 lg:p-6 text-xl"
        aria-label="Formulaire de contact"
      >
        <p className="text-center m-4 p-4">
          <span className="text-sky-800 font-bold">
            Un projet ? Une mission ? Une question ?
          </span>
          <br />
          N'hésitez pas à me contacter sur Linkedin ou via le formulaire
          ci-dessous. <br />
          Je vous répondrai dans les plus brefs délais.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label className="m-4 p-4 text-sky-800 flex flex-col">
            Votre nom
            <input
              type="text"
              placeholder="Nom"
              name="user_name"
              required
              aria-required="true"
              autoComplete="on"
              className="p-4 m-4 rounded-lg shadow-lg"
              style={{ caretColor: "blue" }}
            />
          </label>
          <label className="m-4 p-4 text-sky-800 flex flex-col">
            Votre numéro de téléphone
            <input
              type="tel"
              placeholder="Téléphone"
              name="user_phone"
              required
              aria-required="true"
              autoComplete="on"
              className="p-4 m-4 rounded-lg shadow-lg"
              style={{ caretColor: "blue" }}
            />
          </label>
          <label className="m-4 p-4 text-sky-800 flex flex-col">
            Votre e-mail
            <input
              type="email"
              placeholder="E-mail"
              name="user_email"
              required
              aria-required="true"
              autoComplete="on"
              className="p-4 m-4 rounded-lg shadow-lg"
              style={{ caretColor: "blue" }}
            />
          </label>
          <label className="m-4 p-4 text-sky-800 flex flex-col">
            Le sujet de votre message
            <input
              type="text"
              placeholder="Sujet"
              name="user_subject"
              required
              aria-required="true"
              autoComplete="off"
              className="p-4 m-4 rounded-lg shadow-lg"
              style={{ caretColor: "blue" }}
            />
          </label>
          <label className="m-4 p-4 text-sky-800 flex flex-col">
            Le texte de votre message
            <textarea
              rows="6"
              placeholder="Message"
              name="message"
              required
              aria-required="true"
              className="p-4 m-4 rounded-lg shadow-lg"
              style={{ caretColor: "blue" }}
            />
          </label>
          <button
            type="submit"
            onClick={notify}
            aria-pressed="false"
            className="p-4 m-4 w-32 animate-pulse rounded-lg shadow-lg inline-flex items-center px-3 py-2 text-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Envoyer
          </button>
          {done && <ToastContainer />}
        </form>
      </section>
    </div>
  );
}
export default Contact;
