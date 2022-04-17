import styled from "styled-components";

const StyledContact = styled.div`
  padding: 3em;
  background: linear-gradient(
    ${(props) => props.theme.colors.lightGray} 0%,
    ${(props) => props.theme.colors.darkGray} 100%
  );

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
    text-align: left;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.orange};
  }

  h2 {
    font-weight: bold;
    font-size: 2.0156rem;
    text-align: left;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.white};
  }

  .form-control {
    margin-bottom: 2em;
  }
`;

export default StyledContact;
