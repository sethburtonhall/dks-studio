import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"

import { getRandomColor } from "../utils/helpers"

export const StyledPortfolioGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  list-style: none;
  margin: 0;

  @media ${device.mobileUp} {
    grid-template-columns: repeat(auto-fill, 47%);
    justify-content: space-between;
    grid-gap: 1rem;
  }

  @media ${device.tabletUp} {
    grid-template-columns: repeat(auto-fill, 31%);
  }
`
export const StyledPortfolioGridItem = styled.li`
         width: 100%;
         margin-bottom: .8rem;
         box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
           0 1px 2px rgba(0, 0, 0, 0.24);
         /* border-radius: 5px; */
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

           .title {
             position: absolute;
             top: 50%;
             left: 50%;
             width: 100%;
             padding: 0 10px;
             color: ${theme.black};
             font-size: 30px;
             line-height: 1.5em;
             text-align: center;
             transform: translate(-50%, -50%);
           }

           .hover {
             position: absolute;
             top: 0;
             height: 100%;
             width: 100%;
             opacity: 0;
             transition: 0.3s ease;
             /* background-color: ${getRandomColor}; */
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
