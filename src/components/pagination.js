import React from "react"
import { Link } from "gatsby"

import { StyledPagination } from "../styles/StyledPagination"

const Pagination = ({ previous, next, type, location }) => {
  return (
    <StyledPagination className="pagination">
      <li>
        {previous && (
          <Link
            to={`/${type}/${previous.slug}`}
            rel="prev"
            className="previous"
          >
            <i className="fas fa-arrow-alt-circle-left"></i>
            {location.pathname.includes("blog")
              ? "Previous Post"
              : "Previous Category"}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/${type}/${next.slug}`} rel="next" className="next">
            {location.pathname.includes("blog") ? "Next Post" : "Next Category"}{" "}
            <i className="fas fa-arrow-alt-circle-right"></i>
          </Link>
        )}
      </li>
    </StyledPagination> 
  )
}

export default Pagination
