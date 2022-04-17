import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import ThemeProps from "./Theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    color: ${ThemeProps.colors.white}
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
