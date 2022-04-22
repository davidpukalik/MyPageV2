import styled from "styled-components";

const StyledContact = styled.div`
  padding: 3em;
  background: linear-gradient(
    ${(props) => props.theme.colors.lightGray} 0%,
    ${(props) => props.theme.colors.darkGray} 100%
  );

  h4 {
    text-align: left;
    color: ${(props) => props.theme.colors.orange};
  }

  h2 {
    text-align: left;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.white};
  }

  .form-control {
    margin-bottom: 2em;
  }
`;

export default StyledContact;
