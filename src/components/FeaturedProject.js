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
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 600px;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 100px;
  }
`;

const ProjectSide = styled.div`
  width: 60%;
  height: 100%;
  background-color: #eee;
  margin-left: ${(props) => (props.reverse ? "40px" : "0")};
  margin-right: ${(props) => (props.reverse ? "0" : "40px")};

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 250px;
  }
`;

const ProjectImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;

const TextSide = styled.div`
  width: 40%;
  min-width: 300px;
  /* max-width: 400px; */
  height: 100%;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: unset;
    margin: 0;
    margin-bottom: 15px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;

  @media only screen and (max-width: 992px) {
    font-size: 22px;
    margin: 0;
    margin-bottom: 15px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.8rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
    line-height: 1.7rem;
    margin: 0;
    margin-bottom: 15px;
  }
`;

const Techs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: unset;
    margin: 0;
    margin-bottom: 15px;
  }
`;

const TechItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  padding: 10px 15px;
  color: ${(props) => props.theme.color};

  @media only screen and (max-width: 992px) {
    font-size: 16px;
    padding: 5px 15px;
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
  }

  i {
    font-size: 25px;
    padding: 5px;
    margin: 20px;
    transition: color 0.2s;

    :hover {
      color: ${(props) => props.theme.color};
    }

    @media only screen and (max-width: 992px) {
      padding: 5px 15px;
      margin: 0 10px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

const theme = {
  color: "#ff350d",
};

const FeaturedProject = (props) => {
  let project = useRef(null);

  const displayTechs = () => {
    if (props.techs) {
      return props.techs.map((techItem, i) => {
        return <TechItem key={i}>{techItem}</TechItem>;
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

  return (
    <FeaturedProjectComp ref={(el) => (project = el)} reverse={props.reverse}>
      <ThemeProvider theme={theme}>
        <ProjectSide reverse={props.reverse}>
          <ProjectImage src={props.images} />
        </ProjectSide>
        <TextSide>
          <Title>{props.title}</Title>
          <Desc>{props.desc}</Desc>
          <Techs>{displayTechs()}</Techs>
          <Icons>
            <a href={props.codeLink} target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <i className="fas fa-external-link-alt"></i>
          </Icons>
        </TextSide>
      </ThemeProvider>
    </FeaturedProjectComp>
  );
};

export default FeaturedProject;
