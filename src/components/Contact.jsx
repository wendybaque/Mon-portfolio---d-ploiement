import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";

import "./contact.css";

import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import githubsvg from "../assets/github.svg";
import linkedinsvg from "../assets/linkedin.svg";

function Contact() {
  const notify = () => toast("Merci pour votre message. Je vous répondrai au plus vite.");
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
          // eslint-disable-next-line no-restricted-syntax
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          // eslint-disable-next-line no-restricted-syntax
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg" />
      <div className="contact-wrapper">
        <div className="contact-left" aria-label="Panneau de gauche pour contacter Wendy Baqué">
          <h2 className="contact-title">Contact</h2>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={phone} alt="pictogtamme de téléphone" className="contact-icon" /> 06 98 15
              71 13
            </div>
            <div className="contact-info-item">
              <img src={mail} alt="pictogramme d'enveloppe d'email" className="contact-icon" />{" "}
              baque.wendy@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={linkedinsvg} alt="pictogramme avec le logo de linkedin" className="contact-icon" />{" "}
              <a
                href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
                target="_blanck"
              >
                Wendy Baqué{" "}
              </a>
            </div>
            <div className="contact-info-item">
              <img src={githubsvg} alt="pictogramme avec le logo de github" className="contact-icon" />
              <a href="https://github.com/wendybaque" target="_blanck">
                wendybaque
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right" aria-label="Formulaire de contact">
          <p className="contact-description">
            <span className="span-contact">Un projet ? Une mission ? Une question ?</span> <br />
            N&apos;hésitez pas à me contacter sur Linkedin ou via le formulaire
            ci-dessous. Je vous répondrai dans les plus brefs délais.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label>Votre nom
            <input type="text" placeholder="Nom" name="user_name" required aria-required="true" autoComplete="on"/></label>
            <label>Votre numéro de téléphone
            <input type="tel" placeholder="Téléphone" name="user_phone" required aria-required="true" autoComplete="on"/></label>
            <label>Votre e-mail
            <input type="email" placeholder="E-mail" name="user_email" required aria-required="true" autoComplete="on"/></label>
            <label>Le sujet de votre message
            <input type="text" placeholder="Sujet" name="user_subject" required aria-required="true" autoComplete="off"/></label>
            <label>Le texte de votre message
            <textarea rows="6" placeholder="Message" name="message" required aria-required="true"/></label>
            <button type="submit" onClick={notify} aria-pressed="false" className="contact-button"> Envoyer </button>
            {done &&
              <ToastContainer />}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
