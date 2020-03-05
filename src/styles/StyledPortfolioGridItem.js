import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"

import { getRandomColor } from "../utils/helpers"

// import { rhythm, scale } from "../utils/typography"

export const StyledPortfolioGridItem = styled.li`
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  overflow: hidden;

  a {
    box-shadow: none;
    color: ${theme.black};
  }

  img {
    width: 100%;
    margin: 0 auto 5px;
  }

  .overlay-image {
    position: relative;
    width: 100%;

    .image {
      display: block;
      width: 100%;
      height: auto;
    }

    .text {
      color: ${theme.white};
      font-size: 30px;
      line-height: 1.5em;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .hover {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.3s ease;
      background-color: ${getRandomColor};
    }

    &:hover .hover {
      opacity: 1;
    }
  }

  .portfolio-cat {
    margin: 0;
    font-size: 12px;
    text-align: center;

    @media ${device.tabletUp} {
      font-size: 14px;
    }
  }
`
