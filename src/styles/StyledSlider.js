import styled from "styled-components"
import { theme } from "./Theme"
import { device } from "./MediaQueries"

export const StyledSlider = styled.div`
  margin: 0 20px 100px;

  @media ${device.laptop} {
    margin: 0 auto 20px;
    width: 800px;
    max-width: 800px;
  }

  .title {
    font-size: .75rem;
    text-align: center;

    @media ${device.laptop} {
      margin: 0 0 100px 0;
      font-size: 1rem;
    }
  }

  /* Slick Slider */

  .slick-prev,
  .slick-next {
    /* font-size: 20px;
    color: ${theme.black};

    &:hover {
      color: ${theme.black};
    } */
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${theme.black};
    /* content: none; */
  }

  .slick-dots {
    bottom: -70px;

    @media ${device.laptop} {
      bottom: 20px;
    }

    li button:before {
      font-size: 20px;
    }
  }


`
