// About.js

import React from "react";
import style from "./About.module.scss";
import { Container } from "react-bootstrap";
const About = () => {
  return (
    <div className={style.container} id="about">
      <Container style={{ paddingTop: "1.5rem" }}>
        <h1 className={style.title}>About</h1>
        <p className={style.text}>
          I graduated from high school with distinction. I completed courses
          such as FAC (First Aid Course) and Lifeguard, which is currently my
          profession. I also graduated from TEB EDUKACJA with a major in
          Computer Graphics, as well as from Kodilla with course in Full Stack
          Developer Plus. I also have a category B driving license. I am
          currently looking for my first job as a Junior Web Developer.
        </p>
      </Container>
    </div>
  );
};

export default About;
