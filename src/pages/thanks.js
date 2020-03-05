import React from "react"

// Gatsby
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { StyledThanks } from "../styles/StyledThanks"
import thanksGif from "../images/giphy.gif"

const Thanks = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Thank You" />
      <StyledThanks>
        <p>
          Thank you for your message. Your form submission has been received and
          we will respond ASAP.
        </p>
        <div className="giphy">
          <img src={thanksGif} alt="Thank you!" />
        </div>
      </StyledThanks>
    </Layout>
  )
}

export default Thanks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
