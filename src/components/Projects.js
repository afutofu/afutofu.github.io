import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeaturedProject from "./FeaturedProject";

gsap.registerPlugin(ScrollTrigger);

const ProjectsComp = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  margin: 150px 0;
  margin-bottom: 250px;
  /* padding: 250px 0; */
  box-sizing: border-box;
  object-fit: cover;
  overflow: hidden;
  z-index: 0;
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    margin: 0px 15%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  text-align: left;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding-right: 20px;

  @media only screen and (min-width: 992px) {
    font-size: 28px;
  }
`;

const TitleHighlight = styled.span`
  color: ${(props) => props.theme.color};
`;

const TitleLineWrapper = styled.div`
  overflow-x: hidden;
  flex: 1;
  height: 20px;
  padding: 0;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const theme = {
  color: "#ff350d",
};

const Projects = () => {
  let projects = useRef(null);
  let titleText = useRef(null);
  let titleLine = useRef(null);

  let project1 = useRef(null);
  let project2 = useRef(null);
  let project3 = useRef(null);

  const sectionEnter = () => {
    let tl = new TimelineLite();

    tl.to(projects, {
      height: "0px",
      padding: "0px",
      margin: "0px",
      duration: 0,
    }).to(projects, {
      minHeight: "1600px",
      margin: "250px 0",
      duration: 3,
      ease: Power3.linear,
    });

    return tl;
  };

  const titleEnter = () => {
    let tl = new TimelineLite();

    tl.from(titleText, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    }).fromTo(
      titleLine,
      {
        x: "-100%",
        y: 14,
      },
      {
        x: 0,
        y: 14,
        duration: 0.8,
        ease: Power3.easeInOut,
      },
      "-=0.2"
    );

    return tl;
  };

  const projectsEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      [project1, project2, project3],
      0.5,
      {
        opacity: 0,
        y: 50,
      },
      1
    );

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: projects,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
    master.add(sectionEnter());
    master.add(titleEnter(), "-=1");
    master.add(projectsEnter());
  }, []);

  return (
    <ProjectsComp id="projects" ref={(el) => (projects = el)}>
      <ThemeProvider theme={theme}>
        <Container>
          <Content>
            <TitleArea>
              <Title ref={(el) => (titleText = el)}>
                Some Of My Favorite <TitleHighlight>Projects</TitleHighlight>
              </Title>
              <TitleLineWrapper>
                <TitleLine ref={(el) => (titleLine = el)} />
              </TitleLineWrapper>
            </TitleArea>
            <FeaturedProject ref={(el) => (project1 = el)} />
            <FeaturedProject ref={(el) => (project2 = el)} />
            <FeaturedProject ref={(el) => (project3 = el)} />
          </Content>
        </Container>
      </ThemeProvider>
    </ProjectsComp>
  );
};

export default Projects;
