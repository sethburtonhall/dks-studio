import React from "react"

// Gatsby
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Awards from "../components/awards"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About"
        keywords={[`Illustration`, `Painting`, `North Carolina`]}
      />
      <Bio />
      <Awards />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
