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
    scroll-padding-top: 80px;
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

  h1 {
    font-weight: bold;
    font-size: 2.4413rem;
  }

  h2 {
    font-weight: bold;
    font-size: 2.0156rem;
  }

  h3 {
    font-size: 1.5625rem;
  }

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
