import React, { Component } from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactInfo from "../components/contactInfo"

import { HelmetDatoCms } from "gatsby-source-datocms"

class Contact extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`Illustration`, `Painting`, `North Carolina`]}
        />
        <HelmetDatoCms>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </HelmetDatoCms>
        <ContactInfo />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Contact
