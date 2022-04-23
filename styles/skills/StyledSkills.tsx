import styled from "styled-components";

const StyledSkills = styled.div`
  padding: 3em;
  background: linear-gradient(
    ${(props) => props.theme.colors.lightGray} 0%,
    ${(props) => props.theme.colors.darkGray} 100%
  );

  h4 {
    text-align: right;
    color: ${(props) => props.theme.colors.orange};
  }

  h2 {
    text-align: right;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.white};
  }

  h3 {
    font-family: "Roboto Mono";
    font-weight: 500;
    text-align: left;
    color: #fff;
    margin-bottom: 1em;

    span {
      color: ${(props) => props.theme.colors.orange};
      font-weight: bold;
    }
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2em;
    margin-bottom: 3em;
  }

  /* 768px */
  @media screen and (max-width: 48em) {
    .skills {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  /* 600px */
  @media screen and (max-width: 37.4em) {
    .skills {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* 500px */
  @media screen and (max-width: 31.25em) {
    padding: 1em;

    h3 {
      text-align: center;
    }

    .skills {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* 380px */
  @media screen and (max-width: 23.75em) {
    .skills {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default StyledSkills;
