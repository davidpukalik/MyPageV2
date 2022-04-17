import styled from "styled-components";

const StyledSkills = styled.div`
  padding: 3em;
  background: linear-gradient(
    ${(props) => props.theme.colors.lightGray} 0%,
    ${(props) => props.theme.colors.darkGray} 100%
  );

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
    text-align: right;
    color: ${(props) => props.theme.colors.orange};
  }

  h2 {
    font-weight: bold;
    font-size: 2.0156rem;
    text-align: right;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.white};
  }

  h3 {
    font-family: "Roboto Mono";
    font-weight: 500;
    font-size: 1.5625rem;
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
`;

export default StyledSkills;
