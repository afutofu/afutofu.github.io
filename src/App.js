import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap";

import skyrimWallpaper from "./assets/wallpaper-skyrim-min.jpg";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const AppComp = styled.div`
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

const BackgroundImage = styled.img.attrs(() => {
  return {
    src: skyrimWallpaper,
    alt: "skyrimWallpaper",
  };
})`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -500;

  object-fit: cover;
`;

const Content = styled.div`
  color: #222;
  font-family: "Quicksand", "san-serif";
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ContentBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const App = () => {
  const [navbarTl, setNavbarTl] = useState(null);
  const [homeTl, setHomeTl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [masterTl] = useState(new TimelineLite());
  const backgroundColor = "#fafafa";

  let app = useRef(null);
  // let content = useRef(null);
  let contentBg1 = useRef(null);
  let contentBg2 = useRef(null);

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  const appEnter = () => {
    let tl = new TimelineLite();

    tl.to(app, {
      opacity: 1,
      duration: 0,
    })
      .to(contentBg1, {
        backgroundColor: backgroundColor,
        duration: 2,
        ease: Power3.easeInOut,
      })
      .to(
        contentBg2,
        {
          backgroundColor: backgroundColor,
          duration: 2,
          ease: Power3.easeInOut,
        },
        "-=2"
      );

    return tl;
  };

  useEffect(() => {
    if (navbarTl && homeTl && !isLoading) {
      masterTl.add(appEnter());
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
    <AppWrapper>
      {isLoading && <LoadingScreen isLoading={setIsLoadingCallback} />}
      <AppComp ref={(el) => (app = el)}>
        <Navbar getNavbarTl={getNavbarTl} />
        <Content>
          <BackgroundImage />
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
      </AppComp>
    </AppWrapper>
  );
};

export default App;
