import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OtherProject from "../components/OtherProject";

import rtoRm1 from "../assets/projectImages/rto-rm/rto-rm1.png";
import pfs1 from "../assets/projectImages/python-fastapi-starter/pfs1.png";
import gas1 from "../assets/projectImages/go-api-starter/gas1.png";
import musashi1 from "../assets/projectImages/musashi/musashi1.png";
import saiko1 from "../assets/projectImages/saiko-games/saiko1-min.png";
import benefitted1 from "../assets/projectImages/benefitted/benefitted1.jpg";
import devils1 from "../assets/projectImages/devils-advocate/devils1-min.png";
import insalts1 from "../assets/projectImages/insalts/insalts1.png";
import dbt1 from "../assets/projectImages/dannyboitattoos/dbt1.png";
import pnwrs3 from "../assets/projectImages/pnwrs/pnwrs3.jpg";
import pv1 from "../assets/projectImages/pokemon-viewer/pv1.jpg";
import wordReplacer from "../assets/projectImages/otherProjects/word-replacer.png";
import machios1 from "../assets/projectImages/machios/machios1.png";
import aawt1 from "../assets/projectImages/otherProjects/aawt1.png";
import taskManager from "../assets/projectImages/otherProjects/task-manager.png";
import taskTimer from "../assets/projectImages/otherProjects/task-timer.png";
import dhtw from "../assets/projectImages/otherProjects/dhtw.png";
import agw from "../assets/projectImages/otherProjects/agw.jpg";

gsap.registerPlugin(ScrollTrigger);

const OtherProjectsComp = styled.div`
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
  margin: 0;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding-right: 20px;
  margin: 0;

  @media only screen and (min-width: 992px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 450px) {
    padding-right: 15px;
    font-size: 22px;
    line-height: unset;
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
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const ProjectArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const theme = {
  color: "#ff350d",
};

const OTHER_PROJECTS = [
  {
    title: "RtO Room Maker",
    desc: "Internal tool to manage tile functionality with tile art to create rooms to be used in Rise to Olympus Web Game.",
    techs: ["Typsecript", "React"],
    codeLink: "https://github.com/codetrifecta/rto-room-maker",
    siteLink: "https://rto-room-maker.netlify.app/",
    image: rtoRm1,
  },
  {
    title: "Python FastAPI Starter",
    desc: "Starter implementation of authentication and todo RESTful APIs in Python FastAPI . Includes OpenAPI (Swagger) documentation..",
    techs: ["Python", "FastAPI", "OpenAPI (Swagger)", "JWT"],
    codeLink: "https://github.com/afutofu/python-fastapi-starter",
    image: pfs1,
  },
  {
    title: "Go API Starter",
    desc: "Starter API template for todo apps with user authentication and JWT in Go. Includes OpenAPI (Swagger) documentation.",
    techs: ["Go", "Chi", "OpenAPI (Swagger)", "JWT"],
    codeLink: "https://github.com/afutofu/go-api-starter",
    image: gas1,
  },
  {
    title: "Musashi",
    desc: "Discord music bot to play your favorite songs in your servers. API used currently down.",
    techs: ["Discord.js", "Discord Music Player", "Node.js", "MongoDB"],
    codeLink: "https://github.com/afutofu/musashi",
    siteLink: "https://musashi-bot.netlify.app/",
    image: musashi1,
  },
  {
    title: "Saiko Games",
    desc: "A website displaying video game information and reviews.",
    techs: ["React", "IGDB API", "Node.js", "Express"],
    codeLink: "https://github.com/afutofu/saiko-games-frontend",
    siteLink: "https://saiko-games.netlify.app/",
    image: saiko1,
  },
  {
    title: "Benefitted",
    desc: "Landing page for Benefitted.",
    techs: [
      "React",
      "Instagram Basic Display API",
      "GSAP",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    codeLink: "https://github.com/afutofu/benefitted-frontend",
    siteLink: "https://benefitted.netlify.app/",
    image: benefitted1,
  },
  {
    title: "Devil's Advocate",
    desc: "An e-commerce website selling 'devil fruits' from the 'One Piece' series.",
    techs: ["React", "Node.js", "Express", "MongoDB", "Scrapy", "JWT"],
    codeLink: "https://github.com/afutofu/devils-advocate-frontend",
    siteLink: "https://devils-advocate-afuza.netlify.app/",
    image: devils1,
  },
  {
    title: "Insalts",
    desc: "A site for your favorite jokes and insults inspired by Reddit.",
    techs: ["React", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    codeLink: "https://github.com/afutofu/insalts",
    image: insalts1,
  },
  {
    title: "DannyBoiTattoos",
    desc: "Landing page for DannyBoiTattoos.",
    techs: ["React", "Instagram Basic Display API", "SASS"],
    codeLink: "https://github.com/afutofu/dannyboitattoos",
    siteLink: "https://dannyboitattoos.netlify.app/",
    image: dbt1,
  },
  {
    title: "Pacific Northwest Recovery Services",
    desc: "Landing page for Pacific Northwest Recovery Services.",
    techs: ["React", "NextJS"],
    codeLink: "https://github.com/afutofu/pacific-northwest-recovery-services",
    siteLink: "https://pacificnorthwestrecoveryservices.com/aahaa",
    image: pnwrs3,
  },
  {
    title: "Pokemon Viewer",
    desc: "Webapp utilizing PokeAPI to look for pokemon information.",
    techs: ["React", "PokéAPI", "Styled Components"],
    codeLink: "https://github.com/afutofu/pokemon-viewer",
    siteLink: "https://pokemon-viewer-afuza.netlify.app",
    image: pv1,
  },
  {
    title: "Word Replacer",
    desc: "Web app that replaces words from a text input through a word filter list that you can customize.",
    techs: ["React", "SASS"],
    codeLink: "https://github.com/afutofu/word-replacer",
    siteLink: "https://word-replacer.netlify.app",
    image: wordReplacer,
  },
  {
    title: "Machio's Pub & Gym",
    desc: "Landing page for 'Machio's Pub & Gym', highlighting the menu, gym facilities, and more restaurant related details.",
    techs: ["React"],
    codeLink: "https://github.com/afutofu/machios-pub-and-gym",
    siteLink: "https://machios-pub-and-gym.netlify.app/",
    image: machios1,
  },
  {
    title: "An Alan Watts Tribute",
    desc: "A website detailing Alan Watt's life, books, and a few popular audio clips from his lectures.",
    techs: ["React"],
    codeLink: "https://github.com/afutofu/an-alan-watts-tribute",
    siteLink: "https://an-alan-watts-tribute.netlify.app/",
    image: aawt1,
  },
  {
    title: "Task Manager",
    desc: "A to-do list, day planner, and a 'things I learned today' list all in one app.",
    techs: ["Python", "Tkinter", "SQLite"],
    codeLink: "https://github.com/afutofu/task-manager",
    image: taskManager,
  },
  {
    title: "Task Timer",
    desc: "Records the amount of time you do a task, graphs them, and ranks the time based on the trailing month.",
    techs: ["Python", "Tkinter", "Matplotlib", "SQLite"],
    codeLink: "https://github.com/afutofu/task-timer",
    image: taskTimer,
  },
  {
    title: "Don't Hit The Wall",
    desc: "A two player game where each player has to avoid the wall as the game progresses.",
    techs: ["Java"],
    codeLink: "https://github.com/afutofu/dont-hit-the-wall",
    image: dhtw,
  },
  {
    title: "Automatic Garden Waterer",
    desc: "Code for an automatic garden waterer, watering time can be customized. Used with arduino v3.",
    techs: ["Arduino"],
    codeLink: "https://github.com/afutofu/automatic-garden-waterer",
    image: agw,
  },
];

const OtherProjects = () => {
  let otherProjects = useRef(null);
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
        trigger: otherProjects,
        start: "top-=100 center",
        toggleActions: "play none none none",
      },
    });
    master.add(titleEnter());
  }, []);

  return (
    <OtherProjectsComp ref={(el) => (otherProjects = el)}>
      <ThemeProvider theme={theme}>
        <TitleArea>
          <Title ref={(el) => (titleText = el)}>
            More <TitleHighlight>Projects!</TitleHighlight>
          </Title>
          <TitleLineWrapper>
            <TitleLine ref={(el) => (titleLine = el)} />
          </TitleLineWrapper>
        </TitleArea>
        <ProjectArea>
          {OTHER_PROJECTS.map((project, index) => (
            <OtherProject
              key={index}
              title={project.title}
              desc={project.desc}
              techs={project.techs}
              codeLink={project.codeLink}
              siteLink={project.siteLink}
              image={project.image}
            />
          ))}
        </ProjectArea>
      </ThemeProvider>
    </OtherProjectsComp>
  );
};

export default OtherProjects;
