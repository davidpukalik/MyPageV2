import Image from "next/image";
import React from "react";
import StyledMain from "../styles/main/StyledMain";
import Container from "../styles/shared/Container";
import ProfilePictture from "../assets/images/profile_picture.png";
import SocialMedia from "./shared/SocialMedia";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container flex justifyContent="center" flexDirection="column">
        <div className="profile-picture">
          <Image src={ProfilePictture} alt="Profile Picture" width={240} height={240} />
        </div>
        <h1>
          David <span>Pukalík</span>
        </h1>
        <h3>Junior React Developer</h3>
        <SocialMedia size="large" />
      </Container>
    </StyledMain>
  );
};

export default Main;
