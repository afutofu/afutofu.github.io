import React from "react";
import styled, { ThemeProvider } from "styled-components";

const AboutComp = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Quicksand", "san-serif";
`;

const Content = styled.div`
  margin-top: 40%;
  text-align: left;
  color: #222;

  @media only screen and (min-width: 992px) {
    margin-top: 22%;
  }
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  padding-right: 20px;

  @media only screen and (min-width: 992px) {
    font-size: 28px;
  }
`;

const TitleHighlight = styled.span`
  color: ${(props) => props.theme.color};
`;

const TitleLine = styled.div`
  flex: 1;
  height: 3px;
  padding: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color};
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5rem;
  font-weight: 500;
`;

const DescriptionBold = styled.span`
  font-weight: 600;
`;

const theme = {
  color: "#ff350d",
};

const About = (props) => {
  return (
    <AboutComp>
      <ThemeProvider theme={theme}>
        <Content>
          <TitleArea>
            <Title>
              A Bit <TitleHighlight>About</TitleHighlight> Me
            </Title>
            <TitleLine />
          </TitleArea>
          <Description>
            Hi! I'm Afuza, a college student in Seattle, WA.
          </Description>
          <Description>
            Ever since starting programming, I feel like I've uncovered a
            treasure trove filled with exciting opportunities and untouched
            knowledge. I've built projects ranging from{" "}
            <DescriptionBold>2D video games</DescriptionBold>,{" "}
            <DescriptionBold>personal management tools</DescriptionBold>,{" "}
            <DescriptionBold>company systems</DescriptionBold>,{" "}
            <DescriptionBold>robots</DescriptionBold>,{" "}
            <DescriptionBold>neural networks</DescriptionBold>, and currently
            alot of <DescriptionBold>websites</DescriptionBold>.
          </Description>
          <Description>
            Websites are currently my application of choice, and I'm avid to
            keep contributing to helpful and meaningful projects.
          </Description>
        </Content>
      </ThemeProvider>
    </AboutComp>
  );
};

export default About;
