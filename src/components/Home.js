import React, { useRef, useEffect, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  margin: 0px 15%;
  position: relative;

  @media only screen and (max-width: 992px) {
    margin: 0px 10%;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 10%;
  }
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;

  /* padding-bottom: 150px; */
  box-sizing: border-box;
  @media only screen and (min-width: 2500px) {
    max-width: 800px;
  }
`;

const Introduction = styled.h3`
  color: ${(props) => props.theme.color};
  font-size: 22px;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 700;

  @media only screen and (min-width: 992px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
  }
`;

const Name = styled.h1`
  font-size: 41px;
  color: #222;
  margin: 0;
  margin-bottom: 2px;
  font-family: "Quicksand", "san-serif";
  font-weight: 600;

  @media only screen and (min-width: 992px) {
    font-size: 51px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 20px;
  }
`;

// const NameBold = styled.span`
//   color: #111;
//   font-weight: 600;
//   margin: 0;
//   padding: 0;
// `;

const Motto = styled.h2`
  font-size: 33px;
  color: #666;
  margin: 0;
  margin-bottom: 30px;
  font-weight: 500;

  @media only screen and (min-width: 992px) {
    font-size: 41px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const MottoBold = styled.span`
  position: relative;
  color: #444;
  font-weight: 600;
`;

const Description = styled.p`
  max-width: 60%;
  font-size: 17px;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 35px;

  @media only screen and (min-width: 992px) {
    max-width: 50%;
    font-size: 19px;
    line-height: 1.7rem;
  }

  @media only screen and (max-width: 600px) {
    max-width: 80%;
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: unset;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
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
  margin-bottom: 50px;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 450px) {
    padding: 5px 20px;
    font-size: 14px;
    border-width: 2px;
    margin-bottom: unset;
  }

  @media only screen and (max-width: 350px) {
    padding: 5px 20px;
    font-size: 12px;
    margin-bottom: unset;
  }
`;

const theme = {
  color: "#ff350d",
};

const Home = ({ getHomeTl }) => {
  let home = useRef(null);
  let introduction = useRef(null);
  let name = useRef(null);
  let motto = useRef(null);
  let description = useRef(null);
  let button = useRef(null);

  const getTimeline = useCallback(
    (tl) => {
      getHomeTl(tl);
    },
    [getHomeTl]
  );

  const homeEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      [introduction, name, motto, description, button],
      0.6,
      {
        y: 100,
        autoAlpha: 0,
        ease: Power3.easeOut,
      },
      0.175,
      "-=2"
    );

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(homeEnter());
    getTimeline(masterTl);
  }, [getTimeline]);

  return (
    <HomeComp id="home" ref={(el) => (home = el)}>
      <Container>
        <Content>
          <ThemeProvider theme={theme}>
            <Introduction ref={(el) => (introduction = el)}>
              Hey there, I'm
            </Introduction>
            <Name ref={(el) => (name = el)}>Muhammad Afuzarahman</Name>
            <Motto ref={(el) => (motto = el)}>
              Ready To <MottoBold>Build</MottoBold> And{" "}
              <MottoBold>Learn</MottoBold>
            </Motto>
            <Description ref={(el) => (description = el)}>
              Currently a college student who loves to code. Started coding
              games, then systems, then websites for over 4 years. Only getting
              better and still passionate since the first "Hello World"!
            </Description>
            <Button ref={(el) => (button = el)}>Contact Me</Button>
          </ThemeProvider>
        </Content>
      </Container>
    </HomeComp>
  );
};

export default Home;