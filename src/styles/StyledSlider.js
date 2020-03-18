import styled from "styled-components"
import { theme } from "./Theme"
import { device } from "./MediaQueries"

export const StyledSlider = styled.div`
  margin: 0 auto 150px;
  width: 80%;
  max-width: 80%;

  @media ${device.laptop} {
    margin: 0 auto 20px;
    width: 90%;
    max-width: 90%;
  }

  .title {
    font-size: .75rem;
    text-align: center;
    margin: 20px 0;

    @media ${device.laptop} {
      margin: 20px 0 100px 0;
      font-size: 1rem;
    }
  }

  /* Slick Slider */

  .slick-prev {
    left: -45px;
  }

  .slick-next {
    right: -45px;
  }

  .slick-prev,
  .slick-next {
    /* font-size: 20px;
    color: ${theme.black};

    &:hover {
      color: ${theme.black};
    } */

    width: 40px;
    height: 40px;
    top: 42%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${theme.black};
    /* content: none; */
    font-size: 40px;
  }

  .slick-dots {
    bottom: -90px;

    @media ${device.laptop} {
      bottom: 20px;
    }

    li button:before {
      font-size: 20px;
    }
  }


`
