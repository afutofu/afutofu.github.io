import React, { useRef, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { TimelineLite, Power3 } from "gsap";

const HomeComp = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  box-sizing: border-box;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
`;

const Name = styled.h1`
  font-size: 41px;
  color: #222;
  margin: 0;
  margin-bottom: 2px;
  font-family: "Quicksand", "san-serif";
  font-weight: 500;

  @media only screen and (min-width: 992px) {
    font-size: 51px;
  }
`;

const NameBold = styled.span`
  color: #111;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const Motto = styled.h2`
  font-size: 33px;
  color: #666;
  margin: 0;
  margin-bottom: 30px;
  font-weight: 500;

  @media only screen and (min-width: 992px) {
    font-size: 41px;
  }
`;

const MottoBold = styled.span`
  position: relative;
  color: #444;
  font-weight: 600;
`;

const Description = styled.p`
  max-width: 70%;
  color: #222;
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 35px;
  line-height: 1.5rem;

  @media only screen and (min-width: 992px) {
    max-width: 50%;
    font-size: 19px;
    line-height: 1.7rem;
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
`;

const theme = {
  color: "#ff350d",
};

const Home = (props) => {
  let home = useRef(null);
  let introduction = useRef(null);
  let name = useRef(null);
  let motto = useRef(null);
  let description = useRef(null);
  let button = useRef(null);

  const homeEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      [introduction, name, motto, description, button],
      0.5,
      {
        y: 100,
        opacity: 0,
        ease: Power3.easeOut,
      },
      0.2
    );

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(homeEnter());
    props.getTimeline(masterTl);
  }, []);

  return (
    <HomeComp ref={(el) => (home = el)}>
      <ThemeProvider theme={theme}>
        <Content>
          <Introduction ref={(el) => (introduction = el)}>
            Hey there, I'm
          </Introduction>
          <Name ref={(el) => (name = el)}>
            Muhammad <NameBold>Afuza</NameBold>rahman
          </Name>
          <Motto ref={(el) => (motto = el)}>
            Ready To <MottoBold>Build</MottoBold> And{" "}
            <MottoBold>Learn</MottoBold>
          </Motto>
          <Description ref={(el) => (description = el)}>
            Currently a college student who loves to code. Started coding games,
            then systems, then websites for over 4 years. Only getting better
            and still passionate since the first "Hello World"!
          </Description>
          <Button ref={(el) => (button = el)}>Contact Me</Button>
        </Content>
      </ThemeProvider>
    </HomeComp>
  );
};

export default Home;