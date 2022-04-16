import styled from "styled-components";

const StyledMain = styled.main`
  height: 100vh;
  min-height: 100vh;
  padding-top: 80px;
  background: ${(props) => props.theme.colors.black};

  .profile-picture {
    margin-bottom: 1.2em;

    img {
      border-radius: 50%;
      border: 8px solid rgba(112, 112, 112, 0.3) !important;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 2.4413rem;
    text-transform: uppercase;
    margin-bottom: 0.2em;

    span {
      color: #ff922b;
    }
  }

  h3 {
    font-family: "Roboto Mono";
    font-weight: 500;
    font-size: 1.5625rem;
    color: #fff;
    letter-spacing: -1px;
    margin-bottom: 1em;
  }
`;

export default StyledMain;
