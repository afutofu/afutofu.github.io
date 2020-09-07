import React, { forwardRef } from "react";
import styled from "styled-components";

const LogoComp = styled.h1`
  color: #ff350d;
  font-family: "Montserrat", "san-serif";
  font-size: ${(props) => (props.size ? props.size + "px" : 0)};
  font-weight: 700;
  margin: 0;
  padding: 8px;
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
`;

const Logo = forwardRef((props, ref) => {
  return (
    <LogoComp ref={ref} size={props.size} pointer={props.pointer}>
      {" "}
      A
    </LogoComp>
  );
});

export default Logo;
