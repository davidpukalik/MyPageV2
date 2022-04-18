import React, { useState } from "react";
import StyledNavbar from "../../styles/navbar/StyledNavbar";
import Container from "../../styles/shared/Container";
import LanguageSelect from "../../styles/navbar/LanguageSelect";
import Logo from "../shared/Logo";
import CzechFlag from "../../public/images/flags/czech-flag.svg";
import UKFlag from "../../public/images/flags/united-kingdom-flag.svg";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  isNavBackgroundVisible: boolean;
}

const Navbar: React.FC<Props> = ({ isNavBackgroundVisible }) => {
  const [Lang, setLang] = useState<"Czech" | "English">("Czech");

  // 768px
  const mobile = useMediaQuery("(max-width:48em)");

  return (
    <StyledNavbar isNavBackgroundVisible={isNavBackgroundVisible}>
      <Container flex justifyContent="space-between">
        <Logo />
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="#about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="#skills">
            <a>
              <li>Skills</li>
            </a>
          </Link>
          <Link href="#projects">
            <a>
              <li>Projects</li>
            </a>
          </Link>
          <Link href="#contact">
            <a>
              <li className="outlined">Contact</li>
            </a>
          </Link>
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
