import React, { useEffect } from "react"
import { Link } from "gatsby"

import { StyledPagination } from "../styles/StyledPagination"

const Pagination = ({ previous, next, type, location }) => {
  const renderPrevPagination = () => {
    if (location.pathname.includes("blog")) {
      return "Previous Post"
    } else {
      return "Previous Category"
    }
  }
    const renderNextPagination = () => {
      if (location.pathname.includes("blog")) {
        return "Next Post"
      } else {
        return "Next Category"
      }
    }
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
            {renderPrevPagination()}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/${type}/${next.slug}`} rel="next" className="next">
            {renderNextPagination()}
            <i className="fas fa-arrow-alt-circle-right"></i>
          </Link>
        )}
      </li>
    </StyledPagination>
  )
}

export default Pagination
