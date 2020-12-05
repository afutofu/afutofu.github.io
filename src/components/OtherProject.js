import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OtherProjectComp = styled.div`
  position: relative;
  height: 200px;
  color: #222;
  margin: 10px 10px;
  box-sizing: border-box;
  background-color: #eee;

  a {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    height: 250px;
  }

  @media only screen and (max-width: 600px) {
    height: 200px;
  }
`;

const ProjectImage = styled.img.attrs((props) => ({
  src: props.src ?? "",
  alt: "project-image",
}))`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);

  opacity: 0;

  transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
`;

// const ProjectSide = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   flex: 1;
//   width: 100%;
//   height: 100%;

//   margin-left: ${(props) => (props.reverse ? "40px" : "0")};
//   margin-right: ${(props) => (props.reverse ? "0" : "40px")};
// `;

const TextSide = styled.div`
  /* position: absolute;
  left: 50%;
  transform: translate(-50%); */

  z-index: 10;
  width: 100%;
  height: 100%;
  color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 15px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const Techs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  font-weight: 600;
  font-size: 12px;
  margin: 0 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color};

  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const SiteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  z-index: 50;
  cursor: pointer;

  a {
    position: unset;
    top: unset;
    left: unset;
    opacity: 1;
    pointer-events: auto;
  }

  i {
    color: ${(props) => props.theme.color};
    font-size: 18px;
    padding: 5px;
    transition: color 0.2s;
    transition: transform 0.1s;

    :hover {
      color: ${(props) => props.theme.color};
      transform: scale(1.2);
    }

    @media only screen and (max-width: 992px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 450px) {
      font-size: 12px;
    }
  }
`;

const theme = {
  color: "#ff350d",
};

const FeaturedProject = (props) => {
  let project = useRef(null);

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
      {props.image && <ProjectImage src={props.image} alt="project-image" />}
      <ThemeProvider theme={theme}>
        <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
          <Container>
            <TextSide>
              <Title>{props.title}</Title>
              <Desc>{props.desc}</Desc>
              <Techs>
                {props.techs &&
                  props.techs.map((techItem, i) => {
                    return <TechItem key={i}>{techItem}</TechItem>;
                  })}
              </Techs>
            </TextSide>
            {props.siteLink && (
              <SiteIcon>
                <a
                  href={props.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </SiteIcon>
            )}
          </Container>
        </a>
      </ThemeProvider>
    </OtherProjectComp>
  );
};

export default FeaturedProject;
