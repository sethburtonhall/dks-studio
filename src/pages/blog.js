import React from "react"
import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(post => {
          const title = post.title || post.slug
          return (
            <div key={post.id} className="blog-post">
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`blog/${post.slug}`}>
                  {title}
                </Link>
              </h3>
              {/* <small>{post.date}</small> */}
              {/* <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              /> */}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allDatoCmsBlog {
      nodes {
        id
        title
        slug
        body
      }
    }
  }
`
