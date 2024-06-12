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
import { useSelector } from "react-redux";
import { getAbout } from "../../../redux/informationRedux";
const About = () => {
  const about = useSelector(getAbout);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "CV/CV_Junior_Web_Developer_Przemysław_Bulanda.pdf"; // Replace with the actual path to your CV file
    link.download = "CV_Junior_Web_Developer_Przemysław_Bulanda.pdf"; // Set the desired file name
    link.click();
  };
  return (
    <div className={style.container} id="about">
      <Container style={{ paddingTop: "1.5rem" }}>
        <p className={style.text}>{about.description}</p>
        <div className={style.skillsContainer}>
          <div className={style.card}>
            <h3 className={style.cardTitle}>{about.title[0]}</h3>
            <p className={style.iconCont}>
              <FaGit /> {/* uniwersalne */}
              <h4 className={style.textWithoutLogo}>AJAX</h4>{" "}
              {/* uniwersalne */}
            </p>
          </div>
          <div className={style.card}>
            <h3 className={style.cardTitle}>{about.title[1]}</h3>
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
            <h3 className={style.cardTitle}>{about.title[2]}</h3>
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
