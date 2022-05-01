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

interface Props {
  isNavBackgroundVisible: boolean;
  locale: any;
}

const Navbar: React.FC<Props> = ({ isNavBackgroundVisible, locale: t }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter();
  const mobileRes = useMediaQuery("(max-width:48em)"); // 768px

  if (mobileRes && isMenuActive) {
    document.body.style.overflow = "hidden";
  }

  if (mobileRes && !isMenuActive) {
    document.body.style.overflow = "auto";
  }

  const closeMenu = () => setIsMenuActive(false);

  return (
    <StyledNavbar isNavBackgroundVisible={isNavBackgroundVisible}>
      <Container flex justifyContent="space-between">
        <Logo className="logo" />
        {mobileRes && (
          <div
            className={`hamburger ${isMenuActive ? "is-active" : ""}`}
            onClick={() => setIsMenuActive((prev) => !prev)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        )}
        <ul className={isMenuActive ? "is-active" : ""}>
          <Link href="/">
            <a onClick={closeMenu}>
              <li>{t.Navbar.Home}</li>
            </a>
          </Link>
          <Link href="#about">
            <a onClick={closeMenu}>
              <li>{t.Navbar.About}</li>
            </a>
          </Link>
          <Link href="#skills">
            <a onClick={closeMenu}>
              <li>{t.Navbar.Skills}</li>
            </a>
          </Link>
          <Link href="#projects">
            <a onClick={closeMenu}>
              <li>{t.Navbar.Projects}</li>
            </a>
          </Link>
          <Link href="#contact">
            <a onClick={closeMenu}>
              <li className="outlined">{t.Navbar.Contact}</li>
            </a>
          </Link>
          {mobileRes && (
            <div className="language-select-mobile">
              <h3>{t.Navbar.SelectLang}</h3>
              <ul className="languages">
                <li
                  onClick={() => {
                    router.push("/", "/", { locale: "cs", scroll: false });
                    closeMenu();
                  }}
                >
                  Čeština
                </li>
                <li
                  onClick={() => {
                    router.push("/", "/", { locale: "en", scroll: false });
                    closeMenu();
                  }}
                >
                  English
                </li>
              </ul>
            </div>
          )}
        </ul>
        <LanguageSelect className="language-select">
          <Image
            src={CzechFlag}
            alt="Czech"
            width={30}
            height={30}
            priority
            onClick={() => router.push("/", "/", { locale: "cs", scroll: false })}
          />
          <Image
            src={UKFlag}
            alt="English"
            width={30}
            height={30}
            priority
            onClick={() => router.push("/", "/", { locale: "en", scroll: false })}
          />
        </LanguageSelect>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
