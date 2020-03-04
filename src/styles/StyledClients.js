import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledClients = styled.div`
  .clients {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100%);
    text-align: left;

    @media ${device.mobileUp} {
      grid-template-columns: repeat(auto-fill, 31%);
      justify-content: space-between;
      grid-gap: 1rem;
    }

    @media ${device.laptop} {
      grid-template-columns: repeat(auto-fill, 25%);
    }
  }
  ul {
    margin-left: 30px;
    justify-content: left;

    li {
      /* list-style: none; */
    }
  }
`
