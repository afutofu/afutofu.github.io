import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";

import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

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
  const [navbarTl, setNavbarTl] = useState(null);
  const [homeTl, setHomeTl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [masterTl] = useState(new TimelineLite());

  let main = useRef(null);
  let container = useRef(null);

  const backgroundFadeIn = () => {
    let tl = new TimelineLite();

    tl.to(main, {
      backgroundColor: "#eee",
      duration: 3,
      ease: Power3.easeInOut,
    }).to(
      container,
      {
        backgroundColor: "eee",
        duration: 3,
        ease: Power3.easeInOut,
      },
      "-=3"
    );

    return tl;
  };

  useEffect(() => {
    if (navbarTl && homeTl && !isLoading) {
      masterTl.add(backgroundFadeIn());
      masterTl.add(navbarTl.play(), "-=3");
      masterTl.add(homeTl.play(), "-=2");
      masterTl.play();
    }
  }, [navbarTl, homeTl, isLoading]);

  const getNavbarTl = (tl) => {
    setNavbarTl(tl);
  };

  const getHomeTl = (tl) => {
    setHomeTl(tl);
  };

  return (
    <MainComp ref={(el) => (main = el)}>
      {/* <LoadingScreen isLoading={setIsLoading} /> */}
      <Navbar getTimeline={getNavbarTl} />
      <Content>
        <Container ref={(el) => (container = el)}>
          <Home getTimeline={getHomeTl} />
          {/* <About /> */}
        </Container>
      </Content>
    </MainComp>
  );
};

export default Main;
