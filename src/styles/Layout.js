import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"

// Typography
import { rhythm } from "../utils/typography"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(34)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export const Header = styled.header`
         display: flex;
         justify-content: space-between;
         align-content: center;

         .header {
           margin-bottom: 0;
           margin-top: 0;

           @media ${device.mobileUp} {
             grid-template-columns: repeat(auto-fill, 48%);
             justify-content: space-between;
             grid-gap: 1rem;
             margin-bottom: 0;
           }

           img {
             width: 200px;

             @media ${device.tabletUp} {
               width: 280px;
             }
           }
         }

         a {
           box-shadow: none;
           text-decoration: none;
           color: inherit;
         }

         .logo {
           width: 50%;
         }
       `

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .social {
    display: flex;
    font-size: 30px;

    a {
      box-shadow: none;

      &:hover {
        &.instagram i {
          color: rgb(219, 46, 123);
        }

        &.facebook i {
          color: rgb(66, 103, 178);
        }

        &.linkedin i {
          color: rgb(0, 115, 178);
        }
      }
    }

    i {
      margin-right: 10px;
      color: ${theme.black};
    }
  }

  .copyright {
    .name {
      margin-left: 6px;
    }

    .symbol {
      position: relative;
      top: 3px;
      margin-right: 1px;
    }

    .date {
      font-size: 17px;
    }
  }

  text-align: center;
  margin: 24px 0;
`
