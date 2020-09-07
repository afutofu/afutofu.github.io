import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { TimelineLite } from "gsap";

const HomeComp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.div`
  margin-top: 35%;

  @media only screen and (min-width: 992px) {
    margin-top: 17%;
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
`;

const Name = styled.h1`
  font-size: 43px;
  color: #000;
  margin: 0;
  margin-bottom: 2px;
  font-family: "Quicksand", "san-serif";
  font-weight: 500;

  @media only screen and (min-width: 992px) {
    font-size: 51px;
  }
`;

const NameBold = styled.span`
  color: #222;
  font-weight: 700;
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
  color: #444;
  font-weight: 600;
`;

const Description = styled.p`
  max-width: 70%;
  color: #222;
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 30px;
  line-height: 1.5rem;

  @media only screen and (min-width: 992px) {
    max-width: 50%;
    font-size: 20px;
    line-height: 2rem;
  }
`;

const Button = styled.button`
  font-family: "Quicksand", "san-serif";
  font-weight: 600;
  color: ${(props) => props.theme.color};
  background-color: #fff;
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

const Home = () => {
  let home = useRef(null);
  let introduction = useRef(null);
  let name = useRef(null);
  let motto = useRef(null);
  let description = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    let master = new TimelineLite();
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
            then systems, then websites for over 4 years. I'm only getting
            better and still as ecstatic as the first time I logged "Hello
            World"!
          </Description>
          <Button ref={(el) => (button = el)}>Contact Me</Button>
        </Content>
      </ThemeProvider>
    </HomeComp>
  );
};

export default Home;
