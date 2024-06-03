import React from "react";
import NavBar from "../Navigation/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import ParticlesComponent from "../../../style/Background/particles";

const MainLayout = ({ children }) => {
  return (
    <>
      <ParticlesComponent />
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
