import React from "react"

// Gatsby
import { Link, StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Components
import Nav from "./nav"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <Wrapper>
            <HelmetDatoCms>
              <script
                src="https://kit.fontawesome.com/856c74694a.js"
                crossorigin="anonymous"
              ></script>
            </HelmetDatoCms>
            <Nav location={location.pathname} />
            <div className="app">
              <Header>
                <h3 className="header">
                  <Link to={`/`}>
                    <img
                      src="https://www.datocms-assets.com/23239/1582904975-dks-watermark.png"
                      alt=""
                    />
                  </Link>
                </h3>
              </Header>
              <main>{children}</main>
            </div>

            <Footer>
              <div className="social">
                <a className="instagram" href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
                <a className="facebook" href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook"></i>
                </a>
                <a className="linkedin" href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              <span className="copyright">
                <span className="symbol">©</span>
                <span className="date">{new Date().getFullYear()}</span>
                <span className="name">DKS</span>
              </span>
            </Footer>
          </Wrapper>
        )
      }}
    />
  )
}

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          facebook
          instagram
          linkedin
        }
      }
    }
  }
`

// export const query = graphql`
//   query logoQuery {
//     file(relativePath: { eq: "dks-watermark.png" }) {
//       fixed(width: 200, height: 50) {
//         ...GatsbyDatoCmsFixed
//       }
//     }
//   }
// `

export default Layout
