import React, { forwardRef, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OtherProjectComp = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  min-width: 300px;
  min-height: 250px;
  color: #222;
  padding: 10px;
  margin: 10px 10px;
  box-sizing: border-box;
  background-color: #e5e5e5;
  border-radius: 10px;

  a {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
  }

  @media only screen and (max-width: 1200px) {
    min-width: 280px;
    min-height: 300px;
  }

  @media only screen and (max-width: 992px) {
    min-width: 280px;
    min-height: 350px;
  }

  @media only screen and (max-width: 600px) {
    min-width: 400px;
    min-height: 300px;
    margin-bottom: 20px;
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
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  width: 100%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  color: #121212;
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
  font-size: 17px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;

  @media only screen and (max-width: 1200px) {
    font-size: 19px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 22px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.7rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 15px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 15px;
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
  font-size: 13px;
  margin: 0 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color};

  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

// const CodeIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   display: flex;
//   align-items: center;
//   z-index: 50;

//   a {
//     color: white;
//     pointer-events: none;

//     ${OtherProjectComp}:hover & {
//       opacity: 1;
//       pointer-events: auto;
//     }
//   }

//   i {
//     font-size: 18px;
//     padding: 5px;
//     transition: color 0.2s;
//     transition: opacity 0.5s;

//     opacity: 0;

//     :hover {
//       color: ${(props) => props.theme.color};
//     }

//     ${OtherProjectComp}:hover & {
//       opacity: 1;
//       cursor: pointer;
//     }

//     /* @media only screen and (max-width: 1200px) {
//       font-size: 18px;
//     }

//     @media only screen and (max-width: 992px) {
//       font-size: 18px;
//     }

//     @media only screen and (max-width: 600px) {
//       font-size: 20px;
//     } */
//   }
// `;

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
    /* color: white; */
    pointer-events: none;

    ${OtherProjectComp}:hover & {
      opacity: 1;
      pointer-events: auto;
    }
  }

  i {
    color: ${(props) => props.theme.color};
    font-size: 18px;
    padding: 5px;
    transition: color 0.2s;
    transition: opacity 0.5s;

    opacity: 0;

    :hover {
      color: ${(props) => props.theme.color};
    }

    ${OtherProjectComp}:hover & {
      opacity: 1;
      cursor: pointer;
    }

    /* @media only screen and (max-width: 1200px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 992px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 18px;
    } */
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

  const onMouseEnterProject = () => {
    gsap.to(project, {
      y: -7,
      duration: 0.15,
      backgroundColor: "#eee",
    });
  };

  const onMouseLeaveProject = () => {
    gsap.to(project, {
      y: 0,
      duration: 0.15,
      backgroundColor: "#e5e5e5",
    });
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: project,
        start: "top-=150 center",
        toggleActions: "play none none none",
      },
    });
    master.add(projectEnter());
  }, []);

  return (
    <OtherProjectComp
      ref={(el) => (project = el)}
      onMouseEnter={onMouseEnterProject}
      onMouseLeave={onMouseLeaveProject}
    >
      <ThemeProvider theme={theme}>
        <a href={props.codeLink} target="_blank" />
        {/* <ProjectSide></ProjectSide> */}

        {props.siteLink && (
          <SiteIcon>
            <a href={props.siteLink} target="_blank">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </SiteIcon>
        )}

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
