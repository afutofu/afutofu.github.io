import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";
import { Link } from "react-scroll";

import Logo from "./Logo";

const NavbarComp = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 10px 5%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  z-index: 500;

  transition: top 0.3s;
`;

const NavItems = styled.ul`
  width: 100%;
  min-width: 300px;
  max-width: 450px;
  color: #222;
  font-family: "Quicksand", "san-serif";
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  box-sizing: border-box;

  @media only screen and (min-width: 992px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-end;
  }
`;

const NavItem = styled.li`
  font-size: 20px;
  padding: 0 10px;
  margin: 0;
  box-sizing: border-box;

  transition: color 0.3s;

  :hover {
    cursor: pointer;
    color: #ff350d;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 0 8px;
  }
`;

const Navbar = ({ getNavbarTl }) => {
  let navbar = useRef(null);
  let logo = useRef(null);
  let about = useRef(null);
  let skills = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);
  let resume = useRef(null);

  const navbarEnter = () => {
    let tl = new TimelineLite();

    tl.to(navbar, {
      backgroundColor: "#eee",
      duration: 2,
      ease: Power3.easeInOut,
    });

    return tl;
  };

  const navItemsEnter = () => {
    let tl = new TimelineLite();

    tl.from(logo, 1.5, {
      autoAlpha: 0,
      ease: Power3.easeOut,
    }).staggerFrom(
      [about, skills, projects, contact, resume],
      0.7,
      {
        y: -100,
        autoAlpha: 0,
      },
      0.15,
      "-=1.2"
    );

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(navbarEnter());
    masterTl.add(navItemsEnter(), "-=1.9");
    getNavbarTl(masterTl);
  }, [getNavbarTl]);

  useEffect(() => {
    navbar.style.top = "0px";
    const navbarClass = "." + navbar.getAttribute("class").split(" ").join(".");

    let scrollPosition = 0;
    window.addEventListener("scroll", () => {
      const navbarDOM = document.querySelector(navbarClass);
      let topOfScreenPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (topOfScreenPosition > scrollPosition) {
        navbarDOM.style.top = "-80px";
      } else {
        navbarDOM.style.top = "0";
        navbarDOM.style.boxShadow = "0px 1px 15px 0px rgba(0, 0, 0, 0.1)";

        if (scrollPosition < 50) {
          navbarDOM.style.boxShadow = "";
        }
      }

      scrollPosition = topOfScreenPosition;
    });
  }, [navbar]);

  return (
    <NavbarComp ref={(el) => (navbar = el)}>
      <Link
        to="home"
        smooth={true}
        duration={1000}
        spy={true}
        offset={0}
        ignoreCancelEvents={true}
      >
        <Logo size={30} pointer ref={(el) => (logo = el)} />
      </Link>
      <NavItems>
        <NavItem ref={(el) => (about = el)}>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-30}
            ignoreCancelEvents={true}
          >
            About
          </Link>
        </NavItem>
        <NavItem ref={(el) => (skills = el)}>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-50}
            ignoreCancelEvents={true}
          >
            Skills
          </Link>
        </NavItem>
        <NavItem ref={(el) => (projects = el)}>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-50}
            ignoreCancelEvents={true}
          >
            Projects
          </Link>
        </NavItem>
        <NavItem ref={(el) => (contact = el)}>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            spy={true}
            offset={0}
            ignoreCancelEvents={true}
          >
            Contact
          </Link>
        </NavItem>
        <NavItem ref={(el) => (resume = el)}>Resume</NavItem>
      </NavItems>
    </NavbarComp>
  );
};

export default Navbar;
