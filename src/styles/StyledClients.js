import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledClients = styled.div`
  .clients {
    display: grid;
    grid-template-columns: repeat(auto-fill, 50%);
    text-align: left;

    @media ${device.tabletUp} {
      grid-template-columns: repeat(auto-fill, 23%);
      justify-content: space-between;
      grid-gap: 1rem;
    }

    /* @media ${device.laptop} {
      grid-template-columns: repeat(auto-fill, 25%);
    } */
  }

  ul {
    margin-left: 30;
    justify-content: left;
    font-size: 16px;

    li {
      list-style: none;

      i {
        margin-right: 5px;
      }
    }
  }
`
