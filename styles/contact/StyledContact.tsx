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

  /* 1024px */
  @media screen and (max-width: 64em) {
    .form-control.form-information {
      .MuiFormControl-root {
        width: 29%;
      }

      .MuiInputAdornment-root {
        margin-right: 0.5em;
      }
    }
  }

  /* 768px */
  @media screen and (max-width: 48em) {
    padding: 1em;

    .form-control.form-information {
      flex-direction: column;

      .MuiFormControl-root {
        width: 100%;
      }

      .MuiInputAdornment-root {
        margin-right: 0.5em;
      }

      div {
        margin: 0.7em 0;
      }
    }
  }
`;

export default StyledContact;
