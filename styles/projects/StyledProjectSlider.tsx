import styled from "styled-components";

const StyledProjectSlider = styled.div`
  width: 100%;
  height: 400px;

  h3 {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.3em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.lightGray};
    }
  }

  p {
    margin-bottom: 0.5em;
  }

  .MuiCard-root {
    display: flex !important;
    flex-direction: column !important;
  }
  .MuiCardActions-root {
    margin-top: auto !important;
  }

  .slider {
    .slick-slide > div {
      display: grid;
      justify-items: center;
      align-items: center;
      min-height: 350px;
    }

    .slick-prev::before,
    .slick-next::before {
      color: ${(props) => props.theme.colors.orange};
    }
  }
`;

export default StyledProjectSlider;
