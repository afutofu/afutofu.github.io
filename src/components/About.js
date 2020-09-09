import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutComp = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  padding: 150px 0;
`;

const Content = styled.div`
  position: relative;
  /* top: 50%;
  transform: translateY(-50%); */
  width: 100%;
  max-width: 700px;
  text-align: left;
  color: #222;
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

const Descriptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Description = styled.p`
  font-size: 19px;
  line-height: 1.7rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;

  @media only screen and (min-width: 992px) {
    font-size: 20px;
    line-height: 1.8rem;
  }
`;

const DescriptionBold = styled.span`
  font-weight: 500;
`;

const theme = {
  color: "#ff350d",
};

const About = (props) => {
  let about = useRef(null);
  let titleText = useRef(null);
  let titleLine = useRef(null);
  let descriptions = useRef(null);

  const titleEnter = () => {
    let tl = new TimelineLite();

    tl.from(titleText, {
      y: -50,
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
        duration: 1.2,
        ease: Power3.easeInOut,
      },
      "-=0.2"
    );

    return tl;
  };

  const descriptionsEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      descriptions.childNodes,
      0.5,
      {
        y: 50,
        opacity: 0,
      },
      0.2
    );

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: titleText,
        start: "top+=200 center+=200",
        toggleActions: "play none none none",
      },
    });
    master.add(titleEnter());
    master.add(descriptionsEnter(), "-=0.5");
  }, []);

  return (
    <AboutComp ref={(el) => (about = el)}>
      <ThemeProvider theme={theme}>
        <Content>
          <TitleArea>
            <Title ref={(el) => (titleText = el)}>
              A Bit <TitleHighlight>About</TitleHighlight> Me
            </Title>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLine = el)} />
            </TitleLineWrapper>
          </TitleArea>
          <Descriptions ref={(el) => (descriptions = el)}>
            <Description>
              Hi! I'm Afuza, a college student in Seattle, WA.
            </Description>
            <Description>
              Ever since starting programming, I feel like I've uncovered a
              treasure trove filled with exciting opportunities and untouched
              potential. I've built projects ranging from{" "}
              <DescriptionBold>2D video games</DescriptionBold>,{" "}
              <DescriptionBold>personal management tools</DescriptionBold>,{" "}
              <DescriptionBold>company systems</DescriptionBold>,{" "}
              <DescriptionBold>robots</DescriptionBold>,{" "}
              <DescriptionBold>AI</DescriptionBold>, and currently a lot of{" "}
              <DescriptionBold>websites</DescriptionBold>.
            </Description>
            <Description>
              Websites are currently my application of practice, and I'm avid to
              keep creating and looking forward to contributing to helpful and
              meaningful projects.
            </Description>
          </Descriptions>
        </Content>
      </ThemeProvider>
    </AboutComp>
  );
};

export default About;
