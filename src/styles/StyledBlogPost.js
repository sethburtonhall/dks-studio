import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./theme"
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

    @media ${device.mobileUp} {
      font-size: 1.5rem;
    }

    @media ${device.tabletUp} {
      font-size: 2.5rem;
    }
  }

  .post-date {
    /* ...scale(-1 / 5), */
    display: block;
    /* margin-bottom: rhythm(1);
    margin-top: rhythm(-1); */
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
      text-align: justify;

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
