import React from "react";
import StyledAbout from "../../styles/about/StyledAbout";
import Container from "../../styles/shared/Container";

const About: React.FC = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <h4>About</h4>
        <h2>About Me</h2>
        <div className="desc">
          <p className="special">
            Hello, I&apos;m <span>David</span>!
          </p>
          <p>
            I&apos;m a junior React Developer with fluent English. Currently I&apos;m studying Object Oriented
            Programming and Web Application Programming at Technical University of Ostrava (CZ). I&apos;m available to
            start to work in May 2022.
          </p>
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
