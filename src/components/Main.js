import React from "react";
import styled from "styled-components";

import LoadingScreen from "./LoadingScreen";
import Logo from "./Logo";

const MainComp = styled.div`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #e8e8e8;
`;

const Main = () => {
  return (
    <MainComp>
      <LoadingScreen />
    </MainComp>
  );
};

export default Main;
