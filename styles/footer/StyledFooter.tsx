import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 1em;
  background: ${(props) => props.theme.colors.specialWhite};
  color: ${(props) => props.theme.colors.darkGray};

  /* 360px */
  @media screen and (max-width: 22.5em) {
    p {
      font-size: 0.75rem;
    }
  }
`;

export default StyledFooter;
