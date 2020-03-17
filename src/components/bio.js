import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import { StyledBio } from "../styles/StyledBio"

const Bio = () => {
  return (
    <StaticQuery
      query={aboutQuery}
      render={data => {
        const about = data.about
        return (
          <StyledBio>
            <h1 className="title">About Me</h1>
            <div
              className="bio"
              dangerouslySetInnerHTML={{ __html: about.bio }}
            />
            <Img
              className="bio-image"
              fluid={about.image.fluid}
              durationFadeIn={1000}
              alt={about.name}
            />
          </StyledBio>
        )
      }}
    />
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      name
      title
      bio
      image: bioImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default Bio
