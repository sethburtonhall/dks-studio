import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./theme"

export const StyledBlogCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  list-style: none;
  margin: 0;

  @media ${device.mobileUp} {
    grid-template-columns: repeat(auto-fill, 48%);
    justify-content: space-between;
    grid-gap: 1rem;
  }

  @media ${device.tabletUp} {
    grid-template-columns: repeat(auto-fill, 31%);
  }

  .post-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    overflow: hidden;

    a {
      color: ${theme.black};
      text-decoration: none;
      box-shadow: none;
    }

    .post-info {
      padding: 0 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 115px;

      .post-title {
        font-size: 16px;
        margin: 30px 0;
      }
    }
  }
`
