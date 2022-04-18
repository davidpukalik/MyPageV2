import React from "react";
import StyledFooter from "../../styles/footer/StyledFooter";
import Container from "../../styles/shared/Container";
import Flex from "../../styles/shared/Flex";
import SocialMedia from "../shared/SocialMedia";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <p>&copy; David Pukalík 2022</p>
          <SocialMedia />
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
