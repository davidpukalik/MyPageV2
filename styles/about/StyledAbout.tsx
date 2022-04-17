import { StaticImageData } from "next/image";
import styled from "styled-components";
import AboutMeImg from "../../public/images/about_me_photo.jpg";

const StyledAbout = styled.div`
  background: url(${AboutMeImg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffffae;
  background-blend-mode: overlay;
  color: ${(props) => props.theme.colors.darkGray};
  padding: 3em;

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.orange};
    margin-bottom: 0.3em;
  }

  h2 {
    font-weight: bold;
    font-size: 2.0156rem;
    text-align: left;
    margin-bottom: 1em;
  }

  .desc {
    width: 60%;
    padding: 2em 4em;

    .special {
      font-weight: bold;
      font-size: 1.25rem;
      margin-bottom: 0.5em;

      span {
        color: ${(props) => props.theme.colors.orange};
      }
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default StyledAbout;
