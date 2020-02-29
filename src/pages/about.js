import React from "react"

// Gatsby
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, data: { about }, location }) => {
  const siteTitle = data.site.siteMetadata.title
    
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About"
        keywords={[`Illustration`, `Painting`, `North Carolina`]}
      />
      <article className="sheet">
        <Img fluid={about.image.fluid} durationFadeIn={1000} alt={about.name} />
        <h1>{about.name}</h1>
        <p>{about.title}</p>
        <div dangerouslySetInnerHTML={{ __html: about.bio }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
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

export default About
