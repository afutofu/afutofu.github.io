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
    font-size: 20px;
    line-height: unset;
  }

  @media only screen and (max-width: 350px) {
    font-size: 18px;
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
  font-size: 18px;
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
    /* text-align: justify; */

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

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
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

  .icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: #ff350d 2px solid;
    box-sizing: border-box;
    background-color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .industry {
    position: relative;
    text-align: right;
    width: 50%;
    box-sizing: border-box;
    padding-right: 40px;
    margin-right: 50%;

    .icon {
      right: -11px;
      top: 5px;
    }
  }

  .academia {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    padding-left: 40px;
    margin-left: 50%;

    .icon {
      left: -10px;
      top: 5px;
    }
  }

  .industry,
  .academia {
    .employer {
      font-weight: 500;
      font-size: 18px;
      font-style: italic;
    }

    .employer-logo {
      width: 45px;
      height: 45px;
      border-radius: 10%;
    }
  }

  @media only screen and (max-width: 450px) {
    #middle-line {
      display: none;
    }

    .industry,
    .academia {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
      padding-right: 0;
      padding-left: 0;
      text-align: left;
    }

    .icon {
      display: none;
    }
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
    <ExperienceComp id="industry">
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
                <div />

                <div className="industry">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/C560BAQFxQkzeHZxIYg/company-logo_100_100/company-logo_100_100/0/1633985771178/crowdstrike_logo?e=1756339200&v=beta&t=LiW8Bn22ysBn9LPLn8mYrrYhLba1gfAAefr9IzfOflo"
                        alt="crowdstrike logo"
                      /></div>Software Engineer Intern
                    </h3>
                    <p className="employer">CrowdStrike</p>

                    <p>
                      Built scalable frontend features and tests for a security
                      platform serving 20K+ daily users, contributing to UI,
                      CI/CD, and internal tooling in a large enterprise
                      codebase.
                    </p>

                    <DescriptionBold>
                      June 2025 - September 2025
                    </DescriptionBold>
                  </Description>
                </div>

                <div className="academia">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/C560BAQFwDzhWGVWkvA/company-logo_100_100/company-logo_100_100/0/1630568058793?e=1756339200&v=beta&t=fmYY3ucrFxMsQ09LalKIheuLIH70ONnwQCUU5y8Dtjk"
                        alt="paul allen logo"
                      /></div>CSE Teaching Assistant
                    </h3>
                    <p className="employer">Paul G. Allen School of Computer Science & Engineering</p>
                    <p>
                      Served as a TA for CSE 403 at UW, mentoring 80+ students
                      in Agile, Git, and software design while leading
                      consistent grading efforts across 13+ teams and refining
                      rubrics based on feedback.
                    </p>
                    <DescriptionBold>March 2025 - June 2025</DescriptionBold>
                  </Description>
                </div>

                <div className="academia">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/C4D0BAQEMmhF9TqUCgA/company-logo_100_100/company-logo_100_100/0/1630545704089/university_of_washington_logo?e=1756339200&v=beta&t=NZU7GBDl3JM8h-bPdCNZwmKAw3iuBnZwtzYafOf6ZGI"
                        alt="paul allen logo"
                      /></div> Bachelor's - Computer Science
                    </h3>
                    <p className="employer">University of Washington - Seattle</p>
                    <p>Bachelor of Science, Computer Science</p>
                    <p>GPA: 3.8</p>
                    <DescriptionBold>
                      September 2023 - December 2025
                    </DescriptionBold>
                  </Description>
                </div>

                <div className="industry">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/D560BAQGf4CsTTcZWjA/company-logo_100_100/company-logo_100_100/0/1731063757425/gokomodo_logo?e=1756339200&v=beta&t=N5qxcJHOapOa07TiTbSt82wuUMYbiTP2xxCX-TjPGe0"
                        alt="paul allen logo"
                      /></div>Software Engineer
                    </h3>
                    <p className="employer">Gokomodo</p>
                    <p>
                      Collaboratively built and optimized web and mobile
                      platforms supporting the agribusiness industry, improving
                      performance, engagement, and user satisfaction across
                      e-procurement tools and internal systems.
                    </p>

                    <DescriptionBold>
                      September 2022 - August 2023
                    </DescriptionBold>
                  </Description>
                </div>

                <div className="academia">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/C510BAQFES50IBKXPLA/company-logo_100_100/company-logo_100_100/0/1631319645601?e=1756339200&v=beta&t=p3a0cXhzSwHmQ3BSOnFFnzyJMcMyYaNHh9JFCuLhU6s"
                        alt="grc coding logo"
                      /></div>Computer Science Tutor
                    </h3>
                    <p className="employer">GRC Coding Club</p>
                    <p>
                      Guided students to understand and solve Python, Java, and
                      C++ related computer science problems.{" "}
                    </p>

                    <DescriptionBold>March 2022 - August 2022</DescriptionBold>
                  </Description>
                </div>

                <div className="academia">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/C510BAQFES50IBKXPLA/company-logo_100_100/company-logo_100_100/0/1631319645601?e=1756339200&v=beta&t=p3a0cXhzSwHmQ3BSOnFFnzyJMcMyYaNHh9JFCuLhU6s"
                        alt="green river college logo"
                      /></div>Associate - Computer Science
                    </h3>
                    <p className="employer">Green River College</p>
                    <p>Associate of Science, Computer Science.</p>
                    <p>Graduated with Highest Honors.</p>
                    <p>GPA: 4.0</p>
                    <DescriptionBold>January 2021 - June 2022</DescriptionBold>
                  </Description>
                </div>

                <div className="industry">
                  <Description>
                    <h3>
                      <div className="icon"><img
                        className="employer-logo"
                        src="https://media.licdn.com/dms/image/v2/D4E0BAQEm61LvFDQ0Gg/company-logo_100_100/B4EZaIZV7PGQAQ-/0/1746045069009/indpendent_contractor_logo?e=1756339200&v=beta&t=BUDrguhqjno0kdVw8TxIu0t8dczpqwAFb9A6cLCi-gA"
                        alt="full stack logo"
                      /></div>Full Stack Developer
                    </h3>
                    <p className="employer">Freelance</p>
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
