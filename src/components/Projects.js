import React from "react";
import styled, { ThemeProvider } from "styled-components";

import skyrimWallpaper from "../assets/wallpaper-skyrim.jpg";

const ProjectsComp = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  padding: 250px 0;
  /* margin: 200px 0; */
  /* background-color: #eee; */
  box-sizing: border-box;
  object-fit: cover;
  overflow: hidden;
  z-index: 0;
`;

// const BackgroundImage = styled.img.attrs((props) => ({
//   src: skyrimWallpaper,
//   alt: "skyrimBackgroundll",
// }))`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: -100;
//   object-fit: cover;
// `;

const AlphaBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -500;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BackgroundImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -100;
  background-image: url(${skyrimWallpaper});
  background-size: cover;
  /* object-fit: cover; */
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
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
  return (
    <ProjectsComp id="projects">
      <ThemeProvider theme={theme}>
        <Content>
          <TitleArea>
            <Title>
              Some Of My Favorite <TitleHighlight>Projects</TitleHighlight>
            </Title>
            <TitleLineWrapper>
              <TitleLine />
            </TitleLineWrapper>
          </TitleArea>
        </Content>
      </ThemeProvider>
    </ProjectsComp>
  );
};

export default Projects;
