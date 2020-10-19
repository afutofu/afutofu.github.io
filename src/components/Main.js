import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";

import skyrimWallpaper from "../assets/wallpaper-skyrim.jpg";

import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const MainComp = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
  box-sizing: border-box;
  opacity: 0;
  z-index: 10;
  overflow-y: hidden;
`;

const AlphaBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
  background-color: rgba(0, 0, 0, 0.8);
`;

const BackgroundImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -500;
  object-fit: cover;
`;

const BackgroundImage = styled.img.attrs((props) => ({
  src: skyrimWallpaper,
  alt: "skyrimWallpaper",
}))`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  color: #222;
  font-family: "Quicksand", "san-serif";
  z-index: 0;
`;

const ContentBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Main = () => {
  const [navbarTl, setNavbarTl] = useState(null);
  const [homeTl, setHomeTl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [masterTl] = useState(new TimelineLite());

  let main = useRef(null);
  let content = useRef(null);
  let contentBg1 = useRef(null);
  let contentBg2 = useRef(null);

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  const mainEnter = () => {
    let tl = new TimelineLite();

    tl.to(main, {
      opacity: 1,
      duration: 0,
    })
      .to(contentBg1, {
        backgroundColor: "#eee",
        duration: 2,
        ease: Power3.easeInOut,
      })
      .to(
        contentBg2,
        {
          backgroundColor: "#eee",
          duration: 2,
          ease: Power3.easeInOut,
        },
        "-=2"
      );

    return tl;
  };

  useEffect(() => {
    if (navbarTl && homeTl && !isLoading) {
      masterTl.add(mainEnter());
      masterTl.add(navbarTl.play(), "-=2");
      masterTl.add(homeTl.play(), "-=0.6");
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

  return (
    <MainWrapper>
      {isLoading && <LoadingScreen isLoading={setIsLoadingCallback} />}
      <MainComp ref={(el) => (main = el)}>
        <Navbar getNavbarTl={getNavbarTl} />
        <Content ref={(el) => (content = el)}>
          <AlphaBackground />
          <BackgroundImageContainer>
            <BackgroundImage />
          </BackgroundImageContainer>
          <ContentBackground ref={(el) => (contentBg1 = el)}>
            <Home getHomeTl={getHomeTl} />
            <About />
            <Skills />
          </ContentBackground>
          <Projects />
          <ContentBackground ref={(el) => (contentBg2 = el)}>
            <Contact />
            <Footer />
          </ContentBackground>
        </Content>
      </MainComp>
    </MainWrapper>
  );
};

export default Main;