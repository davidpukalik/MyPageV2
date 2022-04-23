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
      <a href="https://www.facebook.com/david.pukalik/">
        <FacebookIcon
          sx={{ "&:hover": { color: "#3f62a9" }, cursor: "pointer" }}
          fontSize={props.size || "medium"}
          className="facebook"
        />
      </a>
      <a href="https://www.linkedin.com/in/david-pukalik/">
        <LinkedInIcon sx={{ "&:hover": { color: "#0E76A8" }, cursor: "pointer" }} fontSize={props.size || "medium"} />
      </a>
      <a href="https://github.com/davidpukalik">
        <GitHubIcon sx={{ "&:hover": { color: "#5f3dc4" }, cursor: "pointer" }} fontSize={props.size || "medium"} />
      </a>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
