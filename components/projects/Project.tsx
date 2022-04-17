import React from "react";
import StyledProject from "../../styles/projects/StyledProject";
import Container from "../../styles/shared/Container";
import ProjectSlider from "./ProjectSlider";
import projectsData from "../../data/projectsData";

const Project: React.FC = () => {
  return (
    <StyledProject id="projects">
      <Container>
        <h4>Projects</h4>
        <h2>My Skills Showcase</h2>
        <ProjectSlider data={projectsData} />
      </Container>
    </StyledProject>
  );
};

export default Project;
