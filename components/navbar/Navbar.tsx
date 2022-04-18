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
import { useRouter } from "next/router";
import NavbarTransCS from "../../public/locales/cs/navbarTransCS.json";
import NavbarTransEN from "../../public/locales/en/navbarTransEN.json";

interface Props {
  isNavBackgroundVisible: boolean;
  locale: any;
}

const Navbar: React.FC<Props> = ({ isNavBackgroundVisible, locale: t }) => {
  const router = useRouter();
  // const t = locale === "cs" ? NavbarTransCS : NavbarTransEN;

  // 768px
  const mobile = useMediaQuery("(max-width:48em)");

  return (
    <StyledNavbar isNavBackgroundVisible={isNavBackgroundVisible}>
      <Container flex justifyContent="space-between">
        <Logo />
        <ul>
          <Link href="/">
            <a>
              <li>{t.Navbar.Home}</li>
            </a>
          </Link>
          <Link href="#about">
            <a>
              <li>{t.Navbar.About}</li>
            </a>
          </Link>
          <Link href="#skills">
            <a>
              <li>{t.Navbar.Skills}</li>
            </a>
          </Link>
          <Link href="#projects">
            <a>
              <li>{t.Navbar.Projects}</li>
            </a>
          </Link>
          <Link href="#contact">
            <a>
              <li className="outlined">{t.Navbar.Contact}</li>
            </a>
          </Link>
        </ul>
        <LanguageSelect>
          <Image
            src={CzechFlag}
            alt="Czech"
            width={30}
            height={30}
            priority
            onClick={() => router.push(router.asPath, router.asPath, { locale: "cs" })}
          />
          <Image
            src={UKFlag}
            alt="English"
            width={30}
            height={30}
            priority
            onClick={() => router.push(router.asPath, router.asPath, { locale: "en" })}
          />
        </LanguageSelect>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
