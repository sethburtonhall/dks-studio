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
            <Img
              fluid={about.image.fluid}
              durationFadeIn={1000}
              alt={about.name}
            />
            <h1 className="name">{about.name}</h1>
            <h4 className="title">{about.title}</h4>
            <div
              className="bio"
              dangerouslySetInnerHTML={{ __html: about.bio }}
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
