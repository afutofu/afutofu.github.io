import React, { forwardRef } from "react";
import styled from "styled-components";

const FeaturedProejctComp = styled.div`
  width: 100%;
  height: 500px;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

const ProjectSide = styled.div`
  flex: 1;
  height: 100%;
  background-color: #eee;
  margin-right: 30px;
`;

const TextSide = styled.div`
  min-width: 300px;
  max-width: 500px;
  height: 100%;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

const FeaturedProject = forwardRef((props, ref) => {
  if (props.reverse) {
    return (
      <FeaturedProejctComp ref={ref}>
        <TextSide reverse={true}>
          <Title>{props.title}</Title>
          <Desc>{props.desc}</Desc>
        </TextSide>
        <ProjectSide></ProjectSide>
      </FeaturedProejctComp>
    );
  }

  return (
    <FeaturedProejctComp ref={ref}>
      <ProjectSide></ProjectSide>
      <TextSide>
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
      </TextSide>
    </FeaturedProejctComp>
  );
});

export default FeaturedProject;
