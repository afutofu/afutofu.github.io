import React, { useRef, useEffect, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import softwareDevSVG from "../assets/software-developer.svg";
gsap.registerPlugin(ScrollTrigger);

const HomeComp = styled.div`
  position: relative;
  font-family: "Quicksand", "san-serif";
  width: 100%;
  /* max-width: 2000px; */
  height: 100vh;
  padding-top: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin: 0 auto; */
  box-sizing: border-box;
`;

const Container = styled.div`
  margin: 0px 12%;
  position: relative;
  display: flex;
  align-items: center;

  #home-image {
    width: 30vw;
    margin-left: 20px;
    z-index: 0;

    @media only screen and (max-width: 1300px) {
      width: 40vw;
      margin-left: 20px;
      margin-bottom: 40px;
      display: none;
    }

    @media only screen and (max-width: 992px) {
      width: 45vw;
    }

    @media only screen and (max-width: 600px) {
      width: 50vw;
      display: block;
    }
  }

  @media only screen and (max-width: 1600px) {
    margin: 0px 8%;
    display: flex;
    flex-direction: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 1300px) {
    margin: 0px 10%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
  }

  @media only screen and (max-width: 992px) {
    margin: 0px 10%;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 10%;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 100;

  /* padding-bottom: 150px; */
  box-sizing: border-box;
  @media only screen and (min-width: 2500px) {
    max-width: 800px;
  }
`;

const Introduction = styled.h3`
  color: ${(props) => props.theme.color};
  font-size: 20px;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 700;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 8px;
  }
`;

const Name = styled.h1`
  font-size: 48px;
  color: black;
  margin: 0;
  margin-bottom: 2px;
  font-family: "Montserrat", "san-serif";
  font-weight: 600;

  @media only screen and (max-width: 1200px) {
    font-size: 44px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 32px;
    font-weight: 700;
  }

  @media only screen and (max-width: 600px) {
    font-size: 29px;
    font-weight: 600;
  }

  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

// const NameBold = styled.span`
//   color: #111;
//   font-weight: 600;
//   margin: 0;
//   padding: 0;
// `;

const Motto = styled.h2`
  font-size: 28px;
  color: #818181;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Montserrat", "san-serif";

  /* @media only screen and (max-width: 992px) {
    margin-bottom: 20px;
  } */

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 16px;
    /* margin-bottom: 15px; */
  }

  @media only screen and (max-width: 350px) {
    font-size: 14px;
    /* margin-bottom: 10px; */
  }
`;

const MottoBold = styled.span`
  position: relative;
  color: #ff350d;
  font-weight: 700;
`;

const Description = styled.p`
  max-width: 50%;
  font-size: 16px;
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 25px;

  @media only screen and (max-width: 1200px) {
    max-width: 60%;
  }

  @media only screen and (max-width: 992px) {
    /* max-width: 0%; */
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    max-width: 100%;
  }

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  font-family: "Quicksand", "san-serif";
  font-weight: 600;
  color: ${(props) => props.theme.color};
  background-color: unset;
  padding: 10px 40px;
  border-radius: 5px;
  outline: none;
  border: 3px solid ${(props) => props.theme.color};
  font-size: 18px;
  cursor: pointer;

  transition: background-color 0.2s;
  :hover {
    background-color: #ffefeb;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 600px) {
    padding: 7px 24px;
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    padding: 5px 20px;
    font-size: 14px;
    border-width: 2px;
  }

  @media only screen and (max-width: 350px) {
    padding: 5px 20px;
    font-size: 12px;
  }
`;

const theme = {
  color: "#ff350d",
};

const Home = ({ getHomeTl }) => {
  // let home = useRef(null);
  let introduction = useRef(null);
  let name = useRef(null);
  let motto = useRef(null);
  let description = useRef(null);
  let button = useRef(null);
  let homeImage = useRef(null);

  const getTimeline = useCallback(
    (tl) => {
      getHomeTl(tl);
    },
    [getHomeTl]
  );

  const homeEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom([homeImage], 1.5, {
      y: 100,
      autoAlpha: 0,
      ease: Power3.ease,
    }).staggerFrom(
      [introduction, name, motto, description, button],
      0.6,
      {
        y: 100,
        autoAlpha: 0,
        ease: Power3.easeOut,
      },
      0.175,
      "-=1.25"
    );

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(homeEnter());
    getTimeline(masterTl);
  }, [getTimeline]);

  return (
    <HomeComp id="home">
      <Container>
        <Content>
          <ThemeProvider theme={theme}>
            <Introduction ref={(el) => (introduction = el)}>
              Hey there, I'm
            </Introduction>
            <Name ref={(el) => (name = el)}>Afuza Afuzarahman</Name>
            <Motto ref={(el) => (motto = el)}>
              Ready To <MottoBold>Build</MottoBold> And{" "}
              <MottoBold>Innovate</MottoBold>
            </Motto>
            <Description ref={(el) => (description = el)}>
              Experienced software engineer with numerous years of experience.
              Only getting better and still passionate since the first "Hello
              World"!
            </Description>
            <a href="mailto:afuza299@gmail.com">
              <Button ref={(el) => (button = el)}>Contact Me</Button>
            </a>
          </ThemeProvider>
        </Content>
        <img
          ref={(el) => (homeImage = el)}
          id="home-image"
          src={softwareDevSVG}
          alt="Software Developer Illustration"
        />
      </Container>
    </HomeComp>
  );
};

export default Home;
