import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";
import { Link } from "react-scroll";

import Logo from "./Logo";
import Hamburger from "./Hamburger";

const NavbarComp = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 10px 5%;
  padding-right: calc(5% + 4px);
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
  position: relative;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
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

  @media only screen and (max-width: 768px) {
    position: absolute;
    right: ${(props) => (props.isOpen ? "20px" : "-120px")};
    top: 70px;
    flex-direction: column;
    width: 100px;
    min-width: unset;
    align-items: flex-end;
    transition: right 0.7s ease;
  }

  @media only screen and (min-width: 992px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-end;
    min-width: unset;
  }
`;

const NavItem = styled.li`
  font-size: 20px;
  padding: 0 5px;
  margin: 0;
  box-sizing: border-box;

  transition: color 0.2s;

  :hover {
    cursor: pointer;
    color: #ff350d;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
    background-color: #fafafa;
    border-radius: 5px;
  }

  /* @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px;
    margin: 0 3px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    padding: 3px;
    margin: 0 3px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
    padding: 3px;
    margin: 0 3px; */
  /* } */
`;

const NavBold = styled.span`
  font-weight: 700;
  color: #ff350d;
  text-transform: uppercase;
  font-size: 1em;
`;

const Navbar = ({ getNavbarTl }) => {
  let navbar = useRef(null);
  let logo = useRef(null);
  let hamburger = useRef(null);
  let about = useRef(null);
  let experience = useRef(null);
  let skills = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);
  let resume = useRef(null);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navbarEnter = () => {
    let tl = new TimelineLite();

    tl.to(navbar, {
      backgroundColor: "#fafafa",
      duration: 2,
      ease: Power3.easeInOut,
    });

    return tl;
  };

  const navItemsEnter = () => {
    let tl = new TimelineLite();

    tl.from(logo, 2, {
      autoAlpha: 0,
      ease: Power3.easeOut,
    })
      .from(
        hamburger,
        2,
        {
          autoAlpha: 0,
          ease: Power3.easeOut,
        },
        "-=1"
      )
      .staggerFrom(
        [about, experience, skills, projects, contact, resume],
        0.7,
        {
          y: -100,
          autoAlpha: 0,
        },
        0.15,
        "-=1.7"
      );

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(navbarEnter());
    masterTl.add(navItemsEnter(), "-=1.5");
    getNavbarTl(masterTl);
  }, [getNavbarTl]);

  useEffect(() => {
    navbar.style.top = "0px";
    const navbarClass = "." + navbar.getAttribute("class").split(" ").join(".");
    let lastScrollPosition = 0;
    window.addEventListener("scroll", () => {
      setHamburgerOpen(false);

      const navbarDOM = document.querySelector(navbarClass);
      let topOfScreenPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (topOfScreenPosition < 60) {
        navbarDOM.style.top = "0";

        if (topOfScreenPosition < 10) {
          navbarDOM.style.boxShadow = "";
        }

        // Scrolling down
      } else if (topOfScreenPosition > lastScrollPosition) {
        navbarDOM.style.top = "-80px";
      } else {
        // Scrolling up
        navbarDOM.style.top = "0";
        navbarDOM.style.boxShadow = "0px 1px 15px 0px rgba(0, 0, 0, 0.1)";
        // if (topOfScreenPosition < 80) {
        //   navbarDOM.style.boxShadow = "";
        // }
      }
      lastScrollPosition = topOfScreenPosition;
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
      <Hamburger
        isOpen={hamburgerOpen}
        onClick={() => setHamburgerOpen((prev) => !prev)}
        ref={(el) => (hamburger = el)}
      ></Hamburger>
      <NavItems isOpen={hamburgerOpen}>
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
        <NavItem ref={(el) => (experience = el)}>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-50}
            ignoreCancelEvents={true}
          >
            Experience
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
            offset={100}
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
        <NavItem ref={(el) => (resume = el)}>
          <NavBold>
            <a
              href="/Resume_Muhammad_Afuzarahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </NavBold>
        </NavItem>
      </NavItems>
    </NavbarComp>
  );
};

export default Navbar;
