import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fq1 from "../assets/projectImages/fitquest/fq1.png";
import fq2 from "../assets/projectImages/fitquest/fq2.png";
import fq3 from "../assets/projectImages/fitquest/fq3.png";
import fq4 from "../assets/projectImages/fitquest/fq4.png";
import fq5 from "../assets/projectImages/fitquest/fq5.png";
import fq6 from "../assets/projectImages/fitquest/fq6.png";
import fq7 from "../assets/projectImages/fitquest/fq7.png";
import fq8 from "../assets/projectImages/fitquest/fq8.png";
import fq9 from "../assets/projectImages/fitquest/fq9.png";
import rto1 from "../assets/projectImages/rto/rto1.png";
import rto2 from "../assets/projectImages/rto/rto2.png";
import rto3 from "../assets/projectImages/rto/rto3.png";
import rto4 from "../assets/projectImages/rto/rto4.png";
import rto5 from "../assets/projectImages/rto/rto5.png";
import gf1 from "../assets/projectImages/goalforge/gf1.png";
import projecc1 from "../assets/projectImages/projecc/projecc1-min.png";
import projecc2 from "../assets/projectImages/projecc/projecc2-min.png";
import projecc3 from "../assets/projectImages/projecc/projecc3-min.png";
import projecc4 from "../assets/projectImages/projecc/projecc4-min.png";
import projecc5 from "../assets/projectImages/projecc/projecc5-min.png";
import FeaturedProject from "../components/FeaturedProject";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_PROJECTS = [
  {
    title: "FitQuest",
    desc: "💪 FitQuest is a gamified fitness app that transforms users' fitness journeys into engaging RPG-style adventures.",
    techs: [
      "Typescript",
      "React Native",
      "Expo",
      "Tailwind",
      "Firebase",
    ],
    codeLink: "https://github.com/cse403-fitquest/fitquest",
    siteLink: "https://expo.dev/accounts/afuza/projects/fitquest/builds/02729e56-2c3a-4e20-ad9c-1e6d6ee0cb7f",
    images: [fq1, fq2, fq3, fq4, fq5, fq6, fq7, fq8, fq9],
    center: true,
  },
  {
    title: "Rise to Olympus",
    desc: "🏛️ Tactical Turn-Based Roguelike Web Game based on Greek Mythology. Ascend from the depths of Tartarus to the top of Mount Olympus and claim your rewards!",
    techs: [
      "Typescript",
      "React",
      "Tailwind",
      "HTML5 Canvas",
      "Vite",
    ],
    codeLink: "https://github.com/codetrifecta/rise-to-olympus",
    siteLink: "https://rise-to-olympus.netlify.app/",
    images: [rto1, rto2, rto3, rto4, rto5],
  },
  {
    title: "GoalForge",
    desc: "🎯 A productivity tool to assist you in micro and macro task management. Lay out the plans for your goal and track your progress with ease! (WIP)",
    techs: [
      "Typescript",
      "NextJS",
      "Tailwind",
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "DynamoDB",
      "AWS RDS",
    ],
    codeLink: "https://github.com/afutofu/goalforge",
    siteLink: "https://goalforge.vercel.app/",
    images: [gf1],
  },
  {
    title: "Projecc",
    desc: "💬 A real-time text messaging web app inspired by Discord. Join project groups, interact with fellow project members, and plan out your next big project!",
    techs: [
      "Javascript",
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    codeLink: "https://github.com/afutofu/projecc",
    siteLink: "https://projecc-ce68769a9813.herokuapp.com",
    images: [projecc1, projecc2, projecc3, projecc4, projecc5],
  },
];

const FeaturedProjectsComp = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding-right: 20px;

  @media only screen and (min-width: 992px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: auto;
  }

  @media only screen and (max-width: 450px) {
    font-size: 22px;
    line-height: 1.5em;
  }

  @media only screen and (max-width: 350px) {
    font-size: 20px;
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const ProjectArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const theme = {
  color: "#ff350d",
};

const FeaturedProjects = () => {
  let featuredProjects = useRef(null);
  let titleText = useRef(null);
  let titleLine = useRef(null);

  const titleEnter = () => {
    let tl = new TimelineLite();

    tl.from(titleText, {
      y: -100,
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

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: featuredProjects,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
    master.add(titleEnter());
  }, []);

  return (
    <FeaturedProjectsComp ref={(el) => (featuredProjects = el)}>
      <ThemeProvider theme={theme}>
        <TitleArea>
          <Title ref={(el) => (titleText = el)}>
            Featured <TitleHighlight>Projects</TitleHighlight>
          </Title>
          <TitleLineWrapper>
            <TitleLine ref={(el) => (titleLine = el)} />
          </TitleLineWrapper>
        </TitleArea>
        <ProjectArea>
          {FEATURED_PROJECTS.map((featuredProject, index) => (
            <FeaturedProject
              key={featuredProject.title}
              reverse={index % 2 === 0}
              {...featuredProject}
            />
          ))}
        </ProjectArea>
      </ThemeProvider>
    </FeaturedProjectsComp>
  );
};

export default FeaturedProjects;
