// http://negomi.github.io/react-burger-menu/
import React from "react"

// Gatsby
import { Link } from "gatsby"

// Styles
import { StyledNav } from "../styles/Nav"

const Nav = ({ location }) => {

  return (
    <StyledNav>
      <Link id="home" activeClassName="active" to="/" className="menu-item">
        Home
      </Link>
      <Link id="about" activeClassName="active" to="/about" className="menu-item">
        About
      </Link>
      <Link id="Portfolio" activeClassName="active" to="/portfolio" className="menu-item">
        Portfolio
      </Link>
      <Link id="clients" activeClassName="active" to="/clients" className="menu-item">
        Clients
      </Link>
      <Link id="blog" activeClassName="active" to="/blog" className="menu-item">
        Blog
      </Link>
      <Link id="contact" activeClassName="active" to="/contact" className="menu-item">
        Contact
      </Link>
      <a id="store" href="https://www.google.com/" className="menu-item">
        Store
      </a>
    </StyledNav>
  )
}

export default Nav
