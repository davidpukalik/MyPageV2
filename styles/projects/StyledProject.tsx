import styled from "styled-components";

const StyledProject = styled.div`
  background: ${(props) => props.theme.colors.whiteSpecial};
  color: ${(props) => props.theme.colors.darkGray};
  padding: 3em;

  h4 {
    text-align: center;
    color: ${(props) => props.theme.colors.orange};
    margin-bottom: 0.3em;
  }

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.darkGray};
    margin-bottom: 1em;
  }
`;

export default StyledProject;
