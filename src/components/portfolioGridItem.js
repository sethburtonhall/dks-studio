import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Gatsby
import { Link } from "gatsby"
import Img from "gatsby-image"

// Styles
import { StyledPortfolioGridItem } from "../styles/StyledPortfolioGridItem"

const PortfolioGridItem = () => {
  return (
    <StaticQuery
      query={portfolioCover}
      render={data => {
        const portfolioItems = data.portfolioItems.nodes
        return (
          <>
            {portfolioItems.map(portfolioItem => (
              <StyledPortfolioGridItem key={portfolioItem.id}>
                <div class=" overlay-image">
                  <Link to={`/portfolio/${portfolioItem.slug}`}>
                    <Img
                      className="image"
                      fluid={portfolioItem.image.fluid}
                      durationFadeIn={1000}
                      alt={`${portfolioItem.title} Portfolio Cover`}
                    />
                    <div class=" hover">
                      <div class=" text">{portfolioItem.title}</div>
                    </div>
                  </Link>
                </div>
              </StyledPortfolioGridItem>
            ))}
          </>
        )
      }}
    />
  )
}

const portfolioCover = graphql`
  query PortfolioCover {
    portfolioItems: allDatoCmsPortfolio(sort: { fields: [title], order: ASC }) {
      nodes {
        id
        slug
        image: coverImage {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        title
      }
    }
  }
`

export default PortfolioGridItem
