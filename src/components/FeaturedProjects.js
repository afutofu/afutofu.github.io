import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeaturedProject from "./FeaturedProject";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectsComp = styled.div`
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
          <FeaturedProject
            title={"Machio's Pub & Gym"}
            desc={`A website for "Machio's Pub and Gym", highlighting the menu, gym facilities, and more restaurant related details.`}
            techs={["React"]}
          />
          <FeaturedProject
            reverse={true}
            title={"Projecc"}
            desc={`A realtime text messaging web app inspired by Discord. Join project groups, interact with fellow project members, and plan out your next big project!`}
            techs={["React", "Node.js", "Express.js", "Socket.IO"]}
          />
          <FeaturedProject
            title={"Saiko Games"}
            desc={`A video game information website that displays current releases, most popular and featured games, and video game information and reviews.`}
            techs={["React", "IGDB Game API"]}
          />
          <FeaturedProject
            reverse={true}
            title={"Devil's Advocate"}
            desc={`An e-commerce website selling 'devil fruits' from the 'One Piece' series. Data scraped from a third party site, complete with a cart system and authentication.`}
            techs={["React", "Laravel", "SQL", "Scrapy"]}
          />
        </ProjectArea>
      </ThemeProvider>
    </FeaturedProjectsComp>
  );
};

export default FeaturedProjects;
