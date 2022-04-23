import styled from "styled-components";

interface Props {
  isNavBackgroundVisible: boolean;
}

const StyledNavbar = styled.nav<Props>`
  height: 80px;
  width: 100%;
  ${(props) =>
    props.isNavBackgroundVisible &&
    `
    background: ${props.theme.colors.darkGray};
    background: linear-gradient(
      ${props.theme.colors.darkGray} 100%,
      ${props.theme.colors.lightGray} 50%
    );
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  `};
  position: fixed;
  z-index: 99;

  ul {
    display: flex;
    align-items: center;

    a {
      margin-left: 1.5em;

      &:first-child {
        margin-left: 0;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.orange};
        text-shadow: 0px 0px 1px ${({ theme }) => theme.colors.orange};
      }
    }
  }

  /* 768px */
  @media screen and (max-width: 48em) {
    .logo {
      z-index: 11;
    }

    .hamburger {
      cursor: pointer;
      z-index: 11;
      margin-right: 0.5em;

      .line {
        width: 35px;
        height: 3px;
        background-color: #ecf0f1;
        display: block;
        margin: 8px auto;
        transition: all 0.3s ease-in-out;
      }
      &.is-active .line:nth-child(2) {
        opacity: 0;
      }
      &.is-active .line:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      &.is-active .line:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    }

    ul {
      display: none;

      &.is-active {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: ${(props) => props.theme.colors.darkGray};
        padding-top: 80px;
        /* touch-action: none; */

        a {
          margin-left: 0;
          width: 100vw;
          padding: 1em;
          text-align: center;
          background-color: ${(props) => props.theme.colors.lightGray};
          border-bottom: 1px solid ${(props) => props.theme.colors.black};

          &:last-of-type {
            border-bottom: none;
          }

          &:hover {
            background-color: ${(props) => props.theme.colors.orange};
            color: ${(props) => props.theme.colors.whiteSpecial};
            font-weight: bold;
          }
        }
      }
    }

    .language-select {
      display: none;
    }

    .language-select-mobile {
      margin-top: 1em;
      width: 100vw;
      text-align: center;

      h3 {
        margin-bottom: 0.4em;
      }

      .languages {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          /* display: flex;
          justify-content: center;
          align-items: center; */
          width: 50%;
          background-color: ${(props) => props.theme.colors.lightGray};
          cursor: pointer;
          padding: 1em 0;

          &:first-of-type {
            border-right: 1px solid ${(props) => props.theme.colors.black};
          }

          &:hover {
            background-color: ${(props) => props.theme.colors.orange};
            color: ${(props) => props.theme.colors.whiteSpecial};
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default StyledNavbar;
