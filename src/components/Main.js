import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";

import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Home from "./Home";

const MainComp = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
  box-sizing: border-box;
`;

const Content = styled.div`
  /* padding-top: 60px; */
  color: #222;
  font-family: "Quicksand", "san-serif";
`;

const Container = styled.div`
  padding: 0px 20%;
  position: relative;
`;

const Main = () => {
  let main = useRef(null);

  const backgroundFadeIn = () => {
    let tl = new TimelineLite();

    tl.to(main, {
      backgroundColor: "#ee",
      duration: 3,
      ease: Power3.easeIn,
    });

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite();
    master.add(backgroundFadeIn());
    master.play();
  }, []);

  return (
    <MainComp ref={(el) => (main = el)}>
      {/* <LoadingScreen /> */}
      <Navbar />
      <Content>
        <Container>
          <Home />
        </Container>
      </Content>
    </MainComp>
  );
};

export default Main;
