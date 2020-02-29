import React from "react"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
// import PortfolioNav from "../components/porfolioNav"
import Pagination from "../components/pagination"

// import { rhythm, scale } from "../utils/typography"

const PortfolioTemplate = ({ data, location, pageContext }) => {
  const post = data.portfolioItem
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      {/* <PortfolioNav /> */}
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Pagination previous={next} next={previous} type="portfolio" />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    portfolioItem: datoCmsPortfolio(slug: { eq: $slug }) {
      id
      title
      description
    }
  }
`

export default PortfolioTemplate
