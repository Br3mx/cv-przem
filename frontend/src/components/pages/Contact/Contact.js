// Contact.js

import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";
import style from "./Contact.module.scss";
import { Container } from "react-bootstrap";
import { getContact } from "../../../redux/informationRedux.js";
import { useSelector } from "react-redux";

const Contact = () => {
  const contact = useSelector(getContact);
  return (
    <div className={style.container} id="contact">
      <h1 className={style.title}>{contact.title}</h1>
      <Container>
        <div className={style.contactContainer}>
          <div className={style.card}>
            <div className={style.content}>
              <h3>{contact.subtitle[0]}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                className={style.icon}
                href="https://github.com/Br3mx"
              >
                {" "}
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.content}>
              <h3>{contact.subtitle[1]}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                className={style.icon}
                href="https://www.facebook.com/przemek.bulanda.5/"
              >
                {" "}
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.content}>
              <h3>{contact.subtitle[2]}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                className={style.icon}
                href="https://www.linkedin.com/in/przemys%C5%82aw-bulanda-99a47b311/"
              >
                {" "}
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.content}>
              <h3>{contact.subtitle[3]}</h3>
              <FaPhone className={style.phone} />
              <h5>+48 535-657-050</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
