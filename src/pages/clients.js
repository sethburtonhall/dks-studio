import React from "react"

// Gatsby
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/testimonials"
import ClientList from "../components/clients"

const Clients = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Clients"
        keywords={[`Illustration`, `Painting`, `North Carolina`]}
      />
      <Testimonials />
      <ClientList />
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

export default Clients
