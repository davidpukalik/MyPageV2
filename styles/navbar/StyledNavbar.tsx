import styled from "styled-components";

const StyledNavbar = styled.nav`
  height: 80px;
  width: 100%;
  background: ${(props) => props.theme.colors.lightGray};
  background: linear-gradient(
    ${(props) => props.theme.colors.darkGray} 100%,
    ${(props) => props.theme.colors.lightGray} 50%
  );
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
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
`;

export default StyledNavbar;
