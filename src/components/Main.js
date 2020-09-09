import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";

import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import gsap from "gsap/gsap-core";

const MainComp = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0;
`;

const Content = styled.div`
  /* padding-top: 60px; */
  color: #222;
  font-family: "Quicksand", "san-serif";
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;

  @media only screen and (min-width: 992px) {
    margin: 0px 15%;
  }
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
      opacity: 1,
      duration: 0,
    })
      .to(main, {
        backgroundColor: "#eee",
        duration: 3,
        ease: Power3.easeInOut,
      })
      .to(
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

  // Page scroll up on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (navbarTl && homeTl && !isLoading) {
      masterTl.add(backgroundFadeIn());
      masterTl.add(navbarTl.play(), "-=3");
      masterTl.add(homeTl.play(), "-=2");
      masterTl.play();
    }
  }, [masterTl, navbarTl, homeTl, isLoading]);

  const getNavbarTl = useCallback((tl) => {
    setNavbarTl(tl);
  }, []);

  const getHomeTl = useCallback((tl) => {
    setHomeTl(tl);
  }, []);

  const setIsLoadingCallback = useCallback((isLoading) => {
    setIsLoading(isLoading);
  }, []);

  if (isLoading) {
    return <LoadingScreen isLoading={setIsLoadingCallback} />;
  }

  return (
    <MainComp ref={(el) => (main = el)}>
      <Navbar getNavbarTl={getNavbarTl} />
      <Content>
        <Container ref={(el) => (container = el)}>
          <Home getHomeTl={getHomeTl} />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </Container>
      </Content>
    </MainComp>
  );
};

export default Main;
