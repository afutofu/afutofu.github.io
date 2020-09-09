import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-boxl;
`;

const Credits = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;
`;

const Socials = styled.div`
  color: #ff350d;
  display: flex;
  /* width: 100%; */
  max-width: 200px;
  font-size: 24px;
  justify-content: space-between;

  i {
    margin-left: 20px;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterComp>
      <Credits>Developed by Muhammad Afuzarahman</Credits>
      <Socials>
        <i class="fa fa-envelope"></i>
        <i class="fa fa-github"></i>
      </Socials>
    </FooterComp>
  );
};

export default Footer;
