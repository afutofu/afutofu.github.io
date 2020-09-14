import React, { forwardRef, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OtherProjectComp = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  color: #222;
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
    width: 400px;
    height: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 500px;
    height: 300px;
  }
`;

const ProjectSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  margin-left: ${(props) => (props.reverse ? "40px" : "0")};
  margin-right: ${(props) => (props.reverse ? "0" : "40px")};
`;

const TextSide = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  width: 100%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  box-sizing: border-box;
  text-align: center;

  /* opacity: 0; */
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.7rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
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
  font-size: 14px;
  padding: 10px;
  color: ${(props) => props.theme.color};

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }
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
        start: "top-=200 center",
        toggleActions: "play none none none",
      },
    });
    master.add(projectEnter());
  }, []);

  return (
    <OtherProjectComp ref={(el) => (project = el)}>
      <ThemeProvider theme={theme}>
        <ProjectSide></ProjectSide>
        <TextSide>
          <Title>{props.title}</Title>
          <Desc>{props.desc}</Desc>
          <Techs>{displayTechs()}</Techs>
        </TextSide>
      </ThemeProvider>
    </OtherProjectComp>
  );
};

export default FeaturedProject;
