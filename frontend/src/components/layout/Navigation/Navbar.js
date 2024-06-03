import React, { useEffect, useState } from "react";
import style from "./Navbar.module.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMailBulk } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/contact", icon: FaMailBulk, label: "Contact" },
    { to: "/about", icon: FaInfoCircle, label: "About" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Debugging
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={`${style.container} ${scrolled ? style.scrolled : ""}`}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className={style.navbarBrand}
          style={{ textDecoration: "none" }}
        >
          <h3 className={style.brandLogo}>PRZEMYSŁAW</h3>
        </Navbar.Brand>
        <Nav className="ml-auto">
          {links.map(({ to, icon: Icon, label }) => (
            <Nav.Link
              as={Link}
              to={to}
              key={label}
              className={style.navbarLink}
              style={{ textDecoration: "none" }}
            >
              <Icon className={style.navbarIcon} />
              <div className={style.navbarLabel}>{label}</div>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
