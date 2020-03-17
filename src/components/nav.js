// http://negomi.github.io/react-burger-menu/
import React from "react"

// Gatsby
import { Link } from "gatsby"

// Styles
import { StyledNav } from "../styles/StyledNav"

const Nav = ({ location }) => {
  return (
    <StyledNav>
      <Link to="/" id="home" className="menu-item" activeClassName="active">
        Home
      </Link>
      <Link
        to="/about"
        id="about"
        className="menu-item"
        activeClassName="active"
      >
        About
      </Link>
      {/* <Link
        to="/portfolio"
        id="Portfolio"
        className="menu-item"
        activeClassName="active"
        partiallyActive={true}
      >
        Portfolio
      </Link> */}
      <Link
        to="/clients"
        id="clients"
        className="menu-item"
        activeClassName="active"
      >
        Clients
      </Link>
      <Link
        to="/blog"
        id="blog"
        className="menu-item"
        activeClassName="active"
        partiallyActive={true}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        id="contact"
        className="menu-item"
        activeClassName="active"
      >
        Contact
      </Link>
      <a
        href="https://society6.com/davidkstanley"
        id="store"
        className="menu-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        Store
      </a>
    </StyledNav>
  )
}

export default Nav
