import React, { forwardRef } from "react";
import styled from "styled-components";

const LogoComp = styled.h1`
  color: gold;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => (props.size ? props.size + "px" : 0)};
`;

const Logo = forwardRef((props, ref) => {
  return (
    <LogoComp ref={ref} size={props.size}>
      A
    </LogoComp>
  );
});

export default Logo;
