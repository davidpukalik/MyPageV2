import styled from "styled-components";

const SyledLogo = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  font-size: 1.5625rem;
  letter-spacing: -0.1em;
  color: ${(props) => props.theme.colors.orange};
  white-space: nowrap;
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colors.white};
  }
`;

export default SyledLogo;
