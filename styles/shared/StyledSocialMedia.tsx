import styled from "styled-components";

const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-right: 1em;
    transition: all 100ms ease-in-out;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default StyledSocialMedia;
