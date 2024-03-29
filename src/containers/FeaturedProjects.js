import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import musashi1 from "../assets/projectImages/musashi/musashi1.png";
import musashi2 from "../assets/projectImages/musashi/musashi2.png";
import musashi3 from "../assets/projectImages/musashi/musashi3.png";
import musashi4 from "../assets/projectImages/musashi/musashi4.png";
import musashi5 from "../assets/projectImages/musashi/musashi5.png";
import musashi6 from "../assets/projectImages/musashi/musashi6.png";
import benefitted1 from "../assets/projectImages/benefitted/benefitted1.jpg";
import benefitted2 from "../assets/projectImages/benefitted/benefitted2.jpg";
import benefitted3 from "../assets/projectImages/benefitted/benefitted3.jpg";
import benefitted4 from "../assets/projectImages/benefitted/benefitted4.jpg";
import benefitted5 from "../assets/projectImages/benefitted/benefitted5.jpg";
import benefitted6 from "../assets/projectImages/benefitted/benefitted6.jpg";
import projecc1 from "../assets/projectImages/projecc/projecc1-min.png";
import projecc2 from "../assets/projectImages/projecc/projecc2-min.png";
import projecc3 from "../assets/projectImages/projecc/projecc3-min.png";
import projecc4 from "../assets/projectImages/projecc/projecc4-min.png";
import projecc5 from "../assets/projectImages/projecc/projecc5-min.png";
import insalts1 from "../assets/projectImages/insalts/insalts1.png";
import insalts2 from "../assets/projectImages/insalts/insalts2.png";
import insalts3 from "../assets/projectImages/insalts/insalts3.png";
import insalts4 from "../assets/projectImages/insalts/insalts4.png";
import insalts5 from "../assets/projectImages/insalts/insalts5.png";
import saiko1 from "../assets/projectImages/saiko-games/saiko1-min.png";
import saiko2 from "../assets/projectImages/saiko-games/saiko2-min.png";
import saiko3 from "../assets/projectImages/saiko-games/saiko3-min.png";
import saiko4 from "../assets/projectImages/saiko-games/saiko4-min.png";
import saiko5 from "../assets/projectImages/saiko-games/saiko5-min.png";
import devils1 from "../assets/projectImages/devils-advocate/devils1-min.png";
import devils2 from "../assets/projectImages/devils-advocate/devils2-min.png";
import devils3 from "../assets/projectImages/devils-advocate/devils3-min.png";
import devils4 from "../assets/projectImages/devils-advocate/devils4-min.png";
import devils5 from "../assets/projectImages/devils-advocate/devils5-min.png";
import FeaturedProject from "../components/FeaturedProject";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_PROJECTS = [
  {
    title: "Musashi",
    desc: "Discord music bot to play your favorite songs in your servers. Play songs from youtube and spotify, and save your queues to be loaded for next time!",
    techs: ["Discord.js", "Discord Music Player", "Node.js", "MongoDB"],
    codeLink: "https://github.com/afutofu/musashi",
    siteLink: "https://musashi-bot.netlify.app/",
    images: [musashi1, musashi2, musashi3, musashi4, musashi5, musashi6],
  },
  {
    title: "Benefitted",
    desc: "Landing page for Benefitted. Displays Instagram posts, business information, FAQs, and available slot dates to book your own custom apparels and shoes!",
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
    images: [
      benefitted1,
      benefitted2,
      benefitted3,
      benefitted4,
      benefitted5,
      benefitted6,
    ],
  },
  {
    title: "Projecc",
    desc: "A real-time text messaging web app inspired by Discord. Join project groups, interact with fellow project members, and plan out your next big project!",
    techs: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    codeLink: "https://github.com/afutofu/projecc",
    siteLink: "https://projecc-ce68769a9813.herokuapp.com",
    images: [projecc1, projecc2, projecc3, projecc4, projecc5],
  },
  {
    title: "Saiko Games",
    desc: "A video game information website that displays current releases, most popular and featured games, and video game information and reviews.",
    techs: ["React", "IGDB API", "Node.js", "Express"],
    codeLink: "https://github.com/afutofu/saiko-games-frontend",
    siteLink: "https://saiko-games.netlify.app/",
    images: [saiko1, saiko2, saiko3, saiko4, saiko5],
  },
  {
    title: "Devil's Advocate",
    desc: "An e-commerce website selling 'devil fruits' from the 'One Piece' series. Data scraped from a third party site, complete with a cart system and authentication.",
    techs: ["React", "Node.js", "Express", "MongoDB", "Scrapy", "JWT"],
    codeLink: "https://github.com/afutofu/devils-advocate-frontend",
    siteLink: "https://devils-advocate-afuza.netlify.app/",
    images: [devils1, devils2, devils3, devils4, devils5],
  },
  {
    title: "Insalts",
    desc: "A site for your favorite jokes and insults inspired by Reddit. Check out 'salts' (subreddits) to view posts of a specific category, or create your very own and start posting your own jokes!",
    techs: ["React", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    codeLink: "https://github.com/afutofu/insalts",
    images: [insalts1, insalts2, insalts3, insalts4, insalts5],
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
            Some Of My Favorite <TitleHighlight>Projects</TitleHighlight>
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
