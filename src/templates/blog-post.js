import React from "react"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.blogPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {/* {post.date} */}
      </p>
      {post.body}
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Pagination previous={previous} next={next} type="blog" />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    blogPost: datoCmsBlog(slug: { eq: $slug }) {
      id
      title
      body
    }
  }
`
