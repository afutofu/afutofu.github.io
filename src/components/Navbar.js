import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const NavbarComp = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 30px 5%;
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

const Navbar = () => {
  return (
    <NavbarComp>
      <Logo size={30} pointer />
      <NavItems>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Resume</NavItem>
      </NavItems>
    </NavbarComp>
  );
};

export default Navbar;
