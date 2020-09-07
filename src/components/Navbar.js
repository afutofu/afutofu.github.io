import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";

import Logo from "./Logo";

const NavbarComp = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 40px 5%;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  z-index: 10;
`;

const NavItems = styled.ul`
  width: 35%;
  min-width: 350px;
  color: #222;
  font-family: "Quicksand", "san-serif";
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
`;

const NavItem = styled.li`
  font-size: 20px;
  padding: 5px;
  margin: 0;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    color: #ff350d;
  }
`;

const Navbar = (props) => {
  let logo = useRef(null);
  let about = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);
  let resume = useRef(null);

  const navItemsEnter = () => {
    let tl = new TimelineLite();

    tl.from(logo, 1.5, {
      opacity: 0,
    }).staggerFrom(
      [about, projects, contact, resume],
      0.5,
      {
        y: -100,
        opacity: 1,
      },
      0.2,
      "-=1.5"
    );

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(navItemsEnter());
    props.getTimeline(masterTl);
  }, []);

  return (
    <NavbarComp>
      <Logo size={30} pointer ref={(el) => (logo = el)} />
      <NavItems>
        <NavItem ref={(el) => (about = el)}>About</NavItem>
        <NavItem ref={(el) => (projects = el)}>Projects</NavItem>
        <NavItem ref={(el) => (contact = el)}>Contact</NavItem>
        <NavItem ref={(el) => (resume = el)}>Resume</NavItem>
      </NavItems>
    </NavbarComp>
  );
};

export default Navbar;
