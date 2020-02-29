import React from "react"

// Gatsby
// import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import { Link } from "gatsby"

// Components
import Nav from "./nav"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"

const Layout = ({ location, children }) => {
  return (
    <>
      <Wrapper>
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
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    </>
  )
}

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
