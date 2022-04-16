import Link from "next/link";
import React from "react";
import SyledLogo from "../../styles/shared/StyledLogo";

const Logo = () => {
  return (
    <SyledLogo>
      <Link href="/">
        <a>
          David <span>Pukalík</span>
        </a>
      </Link>
    </SyledLogo>
  );
};

export default Logo;
