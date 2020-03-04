import styled from "styled-components"
// import { device } from "./MediaQueries"
import { theme } from "./Theme"

export const StyledTestimonials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);

  .testimonial {
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    font-size: 16px;
    padding: 27px 20px 20px 20px;
    margin-bottom: 50px;

    .icon {
      position: absolute;
      font-size: 40px;
      z-index: -1;
      color: ${theme.gray};
      opacity: .5;
    }

    .left-icon {
      top: 3px;
    }

    .quote {
      position: relative;
      font-style: italic;
      color: ${theme.black};

        .icon {
          bottom: -10px;
          right: 0;
      }
    }

    .citation {
      margin: 0;

    .name {
      font-weight: bold;
    }

    .company {
      font-style: italic;
    }

    }
  }
`
