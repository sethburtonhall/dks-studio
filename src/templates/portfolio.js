import React from "react"

// Gatsby
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Packages
import Slider from "react-slick"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

// Styles
import { StyledSlider } from "../styles/StyledSlider"
import {
  StyledPortfolioGrid,
  StyledPortfolioGridItem,
} from "../styles/StyledPortfolioGrid"

const PortfolioTemplate = ({ data, location, pageContext }) => {
  const post = data.portfolioItem
  const portfolioGalleryImages = data.portfolioItem.gallery
  const sketchbookItems = data.sketchbookItems.nodes
  const site = data.site.siteMetadata
  const { previous, next } = pageContext

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3000,
    fadeIn: false,
    fade: true,
    autoplay: false,
    variableWidth: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log(location.pathname)

  const renderSlider = () => {
    if (location.pathname === "/portfolio/sketchbooks") {
      return (
        <StyledPortfolioGrid>
          {sketchbookItems.map(sketchbookItem => (
            <StyledPortfolioGridItem key={sketchbookItem.id}>
              <div className="overlay-image">
                <Link to={`portfolio/sketchbooks/${sketchbookItem.slug}`}>
                  <Img
                    className="image"
                    fluid={sketchbookItem.image.fluid}
                    durationFadeIn={1000}
                    alt={`${sketchbookItem.title} Portfolio Cover`}
                  />
                  <div className="hover">
                    <div className="title">{sketchbookItem.title}</div>
                  </div>
                </Link>
              </div>
            </StyledPortfolioGridItem>
          ))}
        </StyledPortfolioGrid>
      )
    } else {
      return (
        <div className="image-slider">
          <StyledSlider>
            <Slider {...settings}>
              {portfolioGalleryImages.map((image, i) => (
                <div key={i} className="gallery-images">
                  <Img
                    key={i}
                    className="image"
                    fluid={image.fluid}
                    durationFadeIn={1000}
                    alt={`${image.title}`}
                  />
                  <h4 className="title">{image.title}</h4>
                </div>
              ))}
            </Slider>
          </StyledSlider>
        </div>
      )
    }
  }

  return (
    <Layout location={location} title={site.siteTitle}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <HelmetDatoCms>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </HelmetDatoCms>
      <Pagination previous={next} next={previous} type="portfolio" />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {renderSlider()}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    portfolioItem: datoCmsPortfolio(slug: { eq: $slug }) {
      id
      title
      description
      gallery: samples {
        title
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    sketchbookItems: allDatoCmsSketchbook(
      sort: { fields: [title], order: ASC }
    ) {
      nodes {
        id
        slug
        title
        image: coverImage {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default PortfolioTemplate
