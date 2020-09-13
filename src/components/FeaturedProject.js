import React, { forwardRef, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectComp = styled.div`
  width: 100%;

  height: 400px;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;
`;

const ProjectSide = styled.div`
  flex: 1;
  height: 100%;
  background-color: #eee;
  margin-left: ${(props) => (props.reverse ? "40px" : "0")};
  margin-right: ${(props) => (props.reverse ? "0" : "40px")};
`;

const TextSide = styled.div`
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 19px;
  line-height: 1.7rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;

  @media only screen and (min-width: 992px) {
    font-size: 20px;
    line-height: 1.8rem;
  }
`;

const Techs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  padding: 10px;
  color: ${(props) => props.theme.color};
`;

const theme = {
  color: "#ff350d",
};

const FeaturedProject = (props) => {
  let project = useRef(null);

  const displayTechs = () => {
    if (props.techs) {
      return props.techs.map((techItem) => {
        return <TechItem>{techItem}</TechItem>;
      });
    }

    return null;
  };

  const projectEnter = () => {
    let tl = new TimelineLite();

    tl.from(project, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: Power3.easeInOut,
    });

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: project,
        start: "top-=100 center",
        toggleActions: "play none none none",
      },
    });
    master.add(projectEnter());
  }, []);

  if (props.reverse) {
    return (
      <FeaturedProjectComp ref={(el) => (project = el)}>
        <ThemeProvider theme={theme}>
          <TextSide>
            <Title>{props.title}</Title>
            <Desc>{props.desc}</Desc>
            <Techs>{displayTechs()}</Techs>
          </TextSide>
          <ProjectSide reverse={true}></ProjectSide>
        </ThemeProvider>
      </FeaturedProjectComp>
    );
  }

  return (
    <FeaturedProjectComp ref={(el) => (project = el)}>
      <ThemeProvider theme={theme}>
        <ProjectSide></ProjectSide>
        <TextSide>
          <Title>{props.title}</Title>
          <Desc>{props.desc}</Desc>
          <Techs>{displayTechs()}</Techs>
        </TextSide>
      </ThemeProvider>
    </FeaturedProjectComp>
  );
};

export default FeaturedProject;
