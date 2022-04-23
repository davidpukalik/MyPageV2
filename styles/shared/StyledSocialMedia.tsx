import styled from "styled-components";

const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }

    svg {
      transition: all 100ms ease-in-out;
    }
  }
`;

export default StyledSocialMedia;
