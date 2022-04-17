import Image from "next/image";
import React from "react";
import StyledSkillItem from "../../styles/skills/StyledSkillItem";

interface Props {
  title: String;
  img: HTMLImageElement;
}

const SkillItem: React.FC<Props> = ({ title, img }) => {
  return (
    <StyledSkillItem>
      <Image src={img} alt="React Logo" width={50} height={50} />
      <p>{title}</p>
    </StyledSkillItem>
  );
};

export default SkillItem;
