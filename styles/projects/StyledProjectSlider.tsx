import styled from "styled-components";

const StyledProjectSlider = styled.div`
  width: 100%;
  height: 400px;

  h3 {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.1em;
    text-align: center;
  }

  p.date {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.lightGray};
    text-align: center;
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
      width: 100%;
      height: 100%;
    }

    .slick-next,
    .slick-prev {
      overflow: hidden;
    }

    .slick-arrow {
      width: 2rem;
      height: 2rem;
    }

    .slick-arrow::before {
      font-size: 1.8rem;
    }
  }

  /* 480px */
  @media screen and (max-width: 30em) {
    .slick-prev {
      left: -10%;
    }

    .slick-next {
      right: -10%;
    }
  }

  /* 470px */
  @media screen and (max-width: 29.375em) {
    .card {
      box-shadow: none;
    }

    .slick-prev {
      left: -13%;
    }

    .slick-next {
      right: -13%;
    }
  }

  /* 400px */
  @media screen and (max-width: 25em) {
    .slick-prev {
      left: -18%;
    }

    .slick-next {
      right: -18%;
    }
  }
`;

export default StyledProjectSlider;
