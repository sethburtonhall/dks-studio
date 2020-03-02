import React from "react"

// Gatsby
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import { StyledBlogCard } from "../styles/StyledBlogCard"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <StyledBlogCard>
        {posts.map(post => {
          const title = post.title || post.slug
          return (
            <div key={post.id} className="post-card">
              <Link to={`blog/${post.slug}`}>
                <Img
                  className="featured-image"
                  fluid={post.image.fluid}
                  durationFadeIn={1000}
                  alt={`${post.title} Portfolio Cover`}
                />
                <div className="post-info">
                  <h5 className="post-title">{title}</h5>
                </div>
              </Link>
              <small>{post.date}</small>
            </div>
          )
        })}
      </StyledBlogCard>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allDatoCmsBlog(sort: { fields: [meta___createdAt], order: DESC }) {
      nodes {
        id
        title
        slug
        image: featuredImage {
          fluid(
            imgixParams: {
              fm: "jpg"
              auto: "compress"
              w: "900"
              h: "500"
              fit: "facearea"
              facepad: 1.5
            }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
