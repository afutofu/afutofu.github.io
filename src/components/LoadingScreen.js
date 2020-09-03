import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const LoadingScreenComp = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin: 0;
`;

const LoadingScreen = () => {
  return (
    <LoadingScreenComp>
      <Logo />
    </LoadingScreenComp>
  );
};

export default LoadingScreen;
