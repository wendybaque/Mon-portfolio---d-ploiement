import React, { useRef, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";

import "./contact.css";

import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import githubsvg from "../assets/github.svg";
import linkedinsvg from "../assets/linkedin.svg";

function Contact() {
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
        <div className="contact-left">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={phone} alt="phone" className="contact-icon" /> 06 98 15
              71 13
            </div>
            <div className="contact-info-item">
              <img src={mail} alt="mail" className="contact-icon" />{" "}
              baque.wendy@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={linkedinsvg} alt="linkedin" className="contact-icon" />{" "}
              <a
                href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
                target="_blanck"
              >
                Wendy Baqué{" "}
              </a>
            </div>
            <div className="contact-info-item">
              <img src={githubsvg} alt="github" className="contact-icon" />
              <a href="https://github.com/wendybaque" target="_blanck">
                wendybaque
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <span>Un projet ? Une mission ? Une question ?</span> <br />
            N&apos;hésitez pas à me contacter sur Linkedin ou via le formulaire
            ci-dessous. Je vous répondrai dans les plus brefs délais.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" name="user_name" />
            <input type="text" placeholder="E-mail" name="user_email" />
            <input type="text" placeholder="Sujet" name="user_subject" />
            <textarea rows="6" placeholder="Message" name="message" />
            <button type="submit"> Envoyer </button>
            {done &&
              "Merci pour votre message. Je vous répondrai au plus vite !"}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
