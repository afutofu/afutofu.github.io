import React, { forwardRef } from "react";
import styled from "styled-components";

const FeaturedProejctComp = styled.div`
  width: 100%;
  height: 400px;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

const ProjectSide = styled.div`
  flex: 1;
  height: 100%;
  background-color: white;
`;

const TextSide = styled.div`
  min-width: 300px;
  height: 100%;
  color: #222;
`;

const FeaturedProject = forwardRef((props, ref) => {
  return (
    <FeaturedProejctComp ref={ref}>
      <ProjectSide></ProjectSide>
      <TextSide></TextSide>
    </FeaturedProejctComp>
  );
});

export default FeaturedProject;
