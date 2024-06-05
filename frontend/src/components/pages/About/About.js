// About.js

import React from "react";
import style from "./About.module.scss";
import { Container } from "react-bootstrap";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJira,
  FaJs,
  FaNode,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "CV/CV_Junior_Web_Developer_Przemysław_Bulanda.pdf"; // Replace with the actual path to your CV file
    link.download = "CV_Junior_Web_Developer_Przemysław_Bulanda.pdf"; // Set the desired file name
    link.click();
  };
  return (
    <div className={style.container} id="about">
      <Container style={{ paddingTop: "1.5rem" }}>
        <p className={style.text}>
          I graduated from high school with distinction. I completed courses
          such as FAC (First Aid Course) and Lifeguard, which is currently my
          profession. I also graduated from TEB EDUKACJA with a major in
          Computer Graphics, as well as from Kodilla with course in Full Stack
          Developer Plus. I also have a category B driving license. I am
          currently looking for my first job as a Junior Web Developer.
        </p>
        <div className={style.skillsContainer}>
          <div className={style.card}>
            <h3 className={style.cardTitle}>Universal Tools and Techniques</h3>
            <p className={style.iconCont}>
              <FaGit /> {/* uniwersalne */}
              <h4 className={style.textWithoutLogo}>AJAX</h4>{" "}
              {/* uniwersalne */}
            </p>
          </div>
          <div className={style.card}>
            <h3 className={style.cardTitle}>Frontend Technologies</h3>
            <p className={style.iconCont}>
              <FaHtml5 style={{ color: "blue" }} />
              <FaCss3 style={{ color: "orange" }} />
              <h4 className={style.textWithoutLogo}>RWD</h4>
              <FaBootstrap style={{ color: "purple" }} />
              <FaJs className={style.js} />
              <FaReact
                style={{
                  color: "lightskyblue",
                  backgroundColor: "#2f3542",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              />
              <img className={style.redux} src="img/redux.png" alt="redux" />
              <FaNpm />
              <img
                className={style.webpack}
                src="img/webpack.png"
                alt="webpack"
              />
              <img src="img/typescript.png" alt="typescript" />
            </p>
          </div>
          <div className={style.card}>
            <h3 className={style.cardTitle}>Backend Technologies</h3>
            <p className={style.iconCont}>
              <FaNode style={{ color: "green" }} />
              <h4 className={style.textWithoutLogo}>EXPRESS</h4>
              <img className={style.mongo} src="img/mongo.png" alt="mongo" />
              <img src="img/mysql.png" alt="mysql" />
              <img
                className={style.socket}
                src="img/websocket.png"
                alt="websocket"
              />
              <FaJira style={{ color: "blue" }} />
              <h4 className={style.textWithoutLogo}>Mongoose </h4>
              <img src="img/nestjs.png" alt="nest" />
              <img className={style.prisma} src="img/prisma.png" alt="prisma" />
            </p>
          </div>
        </div>
        <div className={style.cv}>
          <button onClick={handleDownload} className={style.downloadButton}>
            DOWNLOAD CV
          </button>
        </div>
      </Container>
    </div>
  );
};

export default About;
