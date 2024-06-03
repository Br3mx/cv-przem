import React from "react";
import NavBar from "../Navigation/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import ParticlesComponent from "../../../style/Background/particles";
import style from "./MainLayout.module.scss";
const MainLayout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <ParticlesComponent />
      <NavBar />
      <Container className={style.content}>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
