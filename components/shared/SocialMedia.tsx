import React from "react";
import StyledSocialMedia from "../../styles/shared/StyledSocialMedia";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Props {
  size?: "small" | "medium" | "large";
}

const SocialMedia: React.FC<Props> = (props) => {
  return (
    <StyledSocialMedia>
      <FacebookIcon sx={{ "&:hover": { color: "#3f62a9" }, cursor: "pointer" }} fontSize={props.size || "medium"} />
      <LinkedInIcon sx={{ "&:hover": { color: "#0E76A8" }, cursor: "pointer" }} fontSize={props.size || "medium"} />
      <GitHubIcon sx={{ "&:hover": { color: "#5f3dc4" }, cursor: "pointer" }} fontSize={props.size || "medium"} />
    </StyledSocialMedia>
  );
};

export default SocialMedia;
