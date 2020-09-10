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

const MainComp = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
  box-sizing: border-box;
  overflow: auto;
  opacity: 0;
  z-index: 10;
`;

const AlphaBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
  background-color: rgba(0, 0, 0, 0.6);
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

// const BackgroundImage = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   z-index: -500;
//   background-image: url(${skyrimWallpaper});
//   background-size: cover;
//   /* object-fit: cover; */
// `;

const Content = styled.div`
  /* background-color: white; */
  color: #222;
  font-family: "Quicksand", "san-serif";
  z-index: 0;
`;

const Main = () => {
  const [navbarTl, setNavbarTl] = useState(null);
  const [homeTl, setHomeTl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [masterTl] = useState(new TimelineLite());

  let main = useRef(null);
  let content = useRef(null);

  const backgroundFadeIn = () => {
    let tl = new TimelineLite();

    tl.to(main, {
      opacity: 1,
      duration: 0,
    }).to(main, {
      backgroundColor: "#eee",
      duration: 3,
      ease: Power3.easeInOut,
    });

    return tl;
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
      <Content ref={(el) => (content = el)}>
        <AlphaBackground />
        <BackgroundImageContainer>
          <BackgroundImage />
        </BackgroundImageContainer>
        <Home getHomeTl={getHomeTl} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Content>
    </MainComp>
  );
};

export default Main;
