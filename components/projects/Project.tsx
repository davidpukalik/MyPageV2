import React from "react";
import StyledProject from "../../styles/projects/StyledProject";
import Container from "../../styles/shared/Container";
import ProjectSlider from "./ProjectSlider";
import projectsData from "../../data/projectsData";

interface Props {
  locale: any;
}

const Project: React.FC<Props> = ({ locale: t }) => {
  return (
    <StyledProject id="projects">
      <Container>
        <h4>{t.Projects.Subtitle}</h4>
        <h2>{t.Projects.Title}</h2>
        <ProjectSlider locale={t} data={projectsData} />
      </Container>
    </StyledProject>
  );
};

export default Project;
