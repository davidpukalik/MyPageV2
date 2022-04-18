import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 1em;
  background: ${(props) => props.theme.colors.specialWhite};
  color: ${(props) => props.theme.colors.darkGray};
`;

export default StyledFooter;
