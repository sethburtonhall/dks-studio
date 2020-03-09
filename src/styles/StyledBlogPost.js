import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
// import { rhythm } from "../utils/typography"

export const StyledBlogPost = styled.div`
  .full-width {
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
    position: relative;
    right: 50%;
    width: 100vw;
  }

  .post-title {
    text-align: center;
    font-size: 1rem;
    margin: 50px 0 0 0;

    @media ${device.mobileUp} {
      font-size: 1.5rem;
    }

    @media ${device.tabletUp} {
      font-size: 2.5rem;
    }
  }

  .post-date {
    text-align: center;
    font-size: 0.75rem;
    color: ${theme.gray};

    @media ${device.tabletUp} {
      font-size: 1rem;
    }
  }

  .post-body {
    margin-bottom: 50px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0 20px;
      text-align: center;

      @media ${device.tabletUp} {
        padding: 0 50px;
      }
    }

    p {
      padding: 0 20px;

      @media ${device.tabletUp} {
        padding: 0 50px;
      }

      .gatsby-resp-image-link {
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;

        + .gatsby-resp-image-link {
          margin-top: 1.75rem;
        }

        .gatsby-resp-image-background-image,
        .gatsby-resp-image-image {
          border-radius: 10px;
          border: 3px solid ${theme.black};
        }
      }
    }

    blockquote {
      margin-left: 0;
      margin-right: 0;

      p {
        padding: 0;
      }
    }
  }

  hr {
    margin-bottom: rhythm(1);
  }
`
