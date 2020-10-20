import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OtherProject from "./OtherProject";

gsap.registerPlugin(ScrollTrigger);

const OtherProjectsComp = styled.div`
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

  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding-right: 20px;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const theme = {
  color: "#ff350d",
};

const OtherProjects = () => {
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
        start: "top-=100 center",
        toggleActions: "play none none none",
      },
    });
    master.add(titleEnter());
  }, []);

  return (
    <OtherProjectsComp ref={(el) => (featuredProjects = el)}>
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
          <OtherProject
            title={"Task Manager"}
            desc={`A to-do list, day planner, and a 'things I learned today' list all in one app.`}
            techs={["Python", "Tkinter", "SQLite"]}
            codeLink={"https://github.com/afutofu/task-manager"}
          />
          <OtherProject
            reverse={true}
            title={"Task Timer"}
            desc={`Enter a task and start the timer. Records the amount of time you do a task, graphs them, and ranks the time based on the trailing week.`}
            techs={["Python", "Tkinter", "Matplotlib", "SQLite"]}
            codeLink={"https://github.com/afutofu/task-timer"}
          />
          <OtherProject
            reverse={true}
            title={"An Alan Watts Tribute"}
            desc={`A website detailing Alan Watt's life, books, and a few popular audio clips from his lectures. This was my first React project, and I'm looking forward to revisiting it.`}
            techs={["React"]}
            codeLink={"https://github.com/afutofu/an-alan-watts-tribute"}
            siteLink={"https://an-alan-watts-tribute.netlify.app/"}
          />
          <OtherProject
            title={"Insalts"}
            desc={`Reddit for insults. Create insult groups and post insults for people to view. This was my first project using javascript.`}
            techs={["Vanilla JS", "Node.js", "Express"]}
            codeLink={"https://github.com/afutofu/insalts"}
          />
          <OtherProject
            title={"Don't Hit The Wall"}
            desc={`A two player game where each player has to avoid the wall as the game progresses.`}
            techs={["Java"]}
            codeLink={"https://github.com/afutofu/dont-hit-the-wall"}
          />
          <OtherProject
            reverse={true}
            title={"Automatic Garden Waterer"}
            desc={`Code for an automatic garden waterer, watering time can be customized. Used with arduino v3.`}
            techs={["Arduino"]}
            codeLink={"https://github.com/afutofu/automatic-garden-waterer"}
          />
        </ProjectArea>
      </ThemeProvider>
    </OtherProjectsComp>
  );
};

export default OtherProjects;
