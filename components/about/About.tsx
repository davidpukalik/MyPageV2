import React from "react";
import StyledAbout from "../../styles/about/StyledAbout";
import Container from "../../styles/shared/Container";
import { Trans } from "react-i18next";

interface Props {
  locale: any;
}

const About: React.FC<Props> = ({ locale: t }) => {
  return (
    <StyledAbout id="about">
      <Container>
        <h4>{t.About.Subtitle}</h4>
        <h2>{t.About.Title}</h2>
        <div className="desc">
          <p className="special">
            {t.About.DescHigh} <span>David</span>!{/* Hello, I&apos;m <span>David</span>! */}
          </p>
          <p>{t.About.Desc}</p>
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
