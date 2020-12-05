import React from "react"

// Gatsby
import { graphql } from "gatsby"
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

const PortfolioTemplate = ({ data, location, pageContext }) => {
  const post = data.sketchbookItem
  const sketchbookGalleryImages = data.sketchbookItem.gallery
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
    adaptiveHeight: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <Pagination
        previous={next}
        next={previous}
        type="portfolio/sketchbooks"
      />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div className="image-slider">
        <StyledSlider>
          <Slider {...settings}>
            {sketchbookGalleryImages.map((image, i) => (
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
    sketchbookItem: datoCmsSketchbook(slug: { eq: $slug }) {
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
  }
`

export default PortfolioTemplate
