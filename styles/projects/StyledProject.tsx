import styled from "styled-components";

const StyledProject = styled.div`
  background: ${(props) => props.theme.colors.whiteSpecial};
  color: ${(props) => props.theme.colors.darkGray};
  padding: 3em;

  h4 {
    text-align: center;
    color: ${(props) => props.theme.colors.orange};
    font-weight: normal;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-bottom: 0.3em;
  }

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: bold;
    font-size: 2.0156rem;
    margin-bottom: 1em;
  }
`;

export default StyledProject;
