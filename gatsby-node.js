const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create Blog Post & Portfolio Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)
  const sketchbooksTemplate = path.resolve(`./src/templates/sketchbooks.js`)

  return graphql(
    `
      {
        blogs: allDatoCmsBlog(
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              title
              slug
            }
          }
        }
        portfolios: allDatoCmsPortfolio(sort: { fields: [title], order: ASC }) {
          edges {
            node {
              slug
              title
            }
          }
        }
        sketchbooks: allDatoCmsSketchbook(sort: { fields: [title], order: ASC }) {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post page.
    const posts = result.data.blogs.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog/${post.node.slug}`,
        component: blogTemplate,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    // Create portfolio page.
    const portfolio = result.data.portfolios.edges

    portfolio.forEach((post, index) => {
      const previous =
        index === portfolio.length - 1 ? null : portfolio[index + 1].node
      const next = index === 0 ? null : portfolio[index - 1].node

      createPage({
        path: `portfolio/${post.node.slug}`,
        component: portfolioTemplate,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    // Create sketchbook page.
    const sketchbook = result.data.sketchbooks.edges

    sketchbook.forEach((post, index) => {
      const previous =
        index === sketchbook.length - 1 ? null : sketchbook[index + 1].node
      const next = index === 0 ? null : sketchbook[index - 1].node

      createPage({
        path: `portfolio/sketchbooks/${post.node.slug}`,
        component: sketchbooksTemplate,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
