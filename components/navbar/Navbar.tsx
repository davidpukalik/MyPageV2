import React, { useState } from "react";
import StyledNavbar from "../../styles/navbar/StyledNavbar";
import Container from "../../styles/shared/Container";
import LanguageSelect from "../../styles/navbar/LanguageSelect";
import Logo from "../shared/Logo";
import CzechFlag from "../../public/images/flags/czech-flag.svg";
import UKFlag from "../../public/images/flags/united-kingdom-flag.svg";
import Image from "next/image";

interface Props {
  isNavBackground: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  const [Lang, setLang] = useState<"Czech" | "English">("Czech");

  return (
    <StyledNavbar>
      <Container flex justifyContent="space-between">
        <Logo />
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Skills</li>
          </a>
          <a href="">
            <li>Projects</li>
          </a>
          <a href="">
            <li className="outlined">Contact</li>
          </a>
        </ul>
        <LanguageSelect>
          <Image src={CzechFlag} alt="Czech" width={30} height={30} priority />
          <Image src={UKFlag} alt="English" width={30} height={30} priority />
        </LanguageSelect>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
