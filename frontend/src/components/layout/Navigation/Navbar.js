import React, { useEffect, useState } from "react";
import style from "./Navbar.module.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaHome, FaInfoCircle, FaMailBulk } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      to: "firstSection",
      icon: FaHome,
      label: "Home",
      spy: true,
      smooth: true,
      offset: -200,
      duration: 500,
    },
    {
      to: "about",
      icon: FaInfoCircle,
      label: "About",
      spy: true,
      smooth: true,
      offset: -67,
      duration: 500,
    },
    {
      to: "contact",
      icon: FaMailBulk,
      label: "Contact",
      spy: true,
      smooth: true,
      offset: -67,
      duration: 500,
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
          to="firstSection"
          spy={true}
          offset={-200}
          duration={500}
          smooth={true}
          className={style.navbarBrand}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <h3 className={style.brandLogo}>PRZEMYSŁAW</h3>
        </Navbar.Brand>
        <Nav className="ml-auto">
          {links.map(
            ({ to, icon: Icon, label, spy, offset, duration, smooth }) => (
              <Nav.Link
                as={Link}
                to={to}
                spy={spy}
                offset={offset}
                duration={duration}
                smooth={smooth}
                key={label}
                className={style.navbarLink}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Icon className={style.navbarIcon} />
                <div className={style.navbarLabel}>{label}</div>
              </Nav.Link>
            )
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
