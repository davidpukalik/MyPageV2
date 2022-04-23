import Link from "next/link";
import React from "react";
import SyledLogo from "../../styles/shared/StyledLogo";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <SyledLogo className={className}>
      <Link href="/">
        <a>
          David <span>Pukalík</span>
        </a>
      </Link>
    </SyledLogo>
  );
};

export default Logo;
