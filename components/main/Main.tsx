import Image from "next/image";
import React from "react";
import StyledMain from "../../styles/main/StyledMain";
import Container from "../../styles/shared/Container";
import ProfilePicture from "../../public/images/profile_picture.png";
import SocialMedia from "../shared/SocialMedia";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "next/link";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container flex justifyContent="center" flexDirection="column">
        <Container flex justifyContent="center" flexDirection="column">
          <div className="profile-picture">
            <Image src={ProfilePicture} alt="Profile Picture" width={240} height={240} />
          </div>
          <h1>
            David <span>Pukalík</span>
          </h1>
          <h3>Junior React Developer</h3>
          <SocialMedia size="large" />
        </Container>
        <Link href="#about">
          <a className="moving-arrow">
            <DoubleArrowIcon
              sx={{
                transform: "rotate(90deg)",
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
              }}
              fontSize="large"
            />
          </a>
        </Link>
      </Container>
    </StyledMain>
  );
};

export default Main;
