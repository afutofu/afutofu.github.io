import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceComp = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  padding-top: 30px 0;
  margin-bottom: 130px;
  /* background-color: white; */
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
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
  font-size: 28px;
  font-weight: 500;
  padding-right: 20px;

  @media only screen and (max-width: 992px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 450px) {
    padding-right: 15px;
    font-size: 22px;
    line-height: unset;
  }

  @media only screen and (max-width: 350px) {
    font-size: 20px;
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

const Description = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;

  * {
    margin: 0;
  }

  h3 {
    @media only screen and (max-width: 992px) {
      font-size: 23px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 21px;
    }

    @media only screen and (max-width: 450px) {
      font-size: 19px;
    }

    @media only screen and (max-width: 350px) {
      font-size: 17px;
    }
  }

  & > p {
    @media only screen and (max-width: 992px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 16px;
      line-height: 1.5em;
    }

    @media only screen and (max-width: 450px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 350px) {
      font-size: 12px;
    }
  }
`;

const DescriptionBold = styled.span`
  font-weight: 500;
`;

const LineContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  #middle-line {
    width: 1px;
    height: 100%;
    background-color: #ff350d;
    position: absolute;
    left: 50%;
  }

  .experience {
    position: relative;
    text-align: right;
    width: 50%;
    box-sizing: border-box;
    padding-right: 40px;
    margin-right: 50%;
  }

  .education {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    padding-left: 40px;
    margin-left: 50%;
  }
`;

const theme = {
  color: "#ff350d",
};

const Experience = () => {
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
        duration: 0.8,
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
        start: "top center",
        toggleActions: "play none none none",
      },
    });
    // master.add(backgroundFade());
    master.add(titleEnter());
    master.add(descriptionsEnter(), "-=0.3");
  }, []);

  return (
    <ExperienceComp id="experience">
      <Container>
        <ThemeProvider theme={theme}>
          <Content>
            <TitleArea>
              <Title ref={(el) => (titleText = el)}>
                My <TitleHighlight>Experience</TitleHighlight> So Far
              </Title>
              <TitleLineWrapper>
                <TitleLine ref={(el) => (titleLine = el)} />
              </TitleLineWrapper>
            </TitleArea>
            <Descriptions>
              <LineContainer ref={(el) => (descriptions = el)}>
                <div id="middle-line"></div>
                <div className="education">
                  <Description>
                    <h3>Bachelor's - Computer Science</h3>
                    <p>
                      Studying at University of Washington in Seattle, WA, USA
                    </p>
                    <p>
                      First-year junior majoring in Computer Science. Expected
                      to graduate in early 2026.
                    </p>

                    <DescriptionBold>
                      September 2023 - March 2026
                    </DescriptionBold>
                  </Description>
                </div>

                <div className="experience">
                  <Description>
                    <h3>Software Engineer</h3>
                    <p>
                      Worked at Gokomodo / PT Saka Uniti in Jakarta, Indonesia.
                    </p>
                    <p>
                      Mid-Level front-end engineer primarily utilizing
                      Typescript, React, Vite, Tailwind, jQuery, Django, and
                      others to create MVPs, CMSs, user facing, and admin
                      portals to form a supply chain management ecosystem for
                      organizations in the Agribusiness and Commodities industry
                      in Indonesia.
                    </p>

                    <DescriptionBold>
                      September 2022 - August 2023
                    </DescriptionBold>
                  </Description>
                </div>

                <div className="experience">
                  <Description>
                    <h3>Computer Science Tutor</h3>
                    <p>
                      Volunteered at Green River College Coding Club in Auburn,
                      WA, USA.
                    </p>
                    <p>
                      Guided students to understand and solve Python, Java, and
                      C++ related computer science problems.{" "}
                    </p>

                    <DescriptionBold>March 2022 - August 2022</DescriptionBold>
                  </Description>
                </div>

                <div className="education">
                  <Description>
                    <h3>Associate - Computer Science</h3>
                    <p>
                      Studied at Green River Community College in Auburn, WA,
                      USA.
                    </p>
                    <p>
                      Graduated with an Associate Degree in Computer Science.
                    </p>

                    <DescriptionBold>January 2021 - June 2022</DescriptionBold>
                  </Description>
                </div>

                <div className="experience">
                  <Description>
                    <h3>Software Developer</h3>
                    <p>
                      Freelancing for local communities in Jakarta, Indonesia.
                    </p>
                    <p>
                      Built a variety of apps ranging from personal websites,
                      personal management tools, and business management
                      applications.
                    </p>

                    <DescriptionBold>June 2019 - August 2022</DescriptionBold>
                  </Description>
                </div>
              </LineContainer>
            </Descriptions>
          </Content>
        </ThemeProvider>
      </Container>
    </ExperienceComp>
  );
};

export default Experience;
