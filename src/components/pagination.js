import React from "react"
import { Link } from "gatsby"

import { StyledPagination } from "../styles/StyledPagination"

const Pagination = ({ previous, next, type }) => {
    
  // const renderPrevious = () => {
  //   if (location.pathname === "/portfolio/sketchbooks/portfolio/sketchbooks/faces-in-the-crowd") {
  //     return (
  //       <div>Test</div>
  //     )
  //   } else {
  //     return (
  //       <li>
  //         {previous && (
  //           <Link to={`/${type}/${previous.slug}`} rel="prev" className="previous">
  //             <i className="fas fa-arrow-alt-circle-left"></i>Previous
  //           </Link>
  //         )}
  //       </li>
  //     )
  //   }
  // }

  return (
    <StyledPagination className="pagination">
      <li>
        {previous && (
          <Link
            to={`/${type}/${previous.slug}`}
            rel="prev"
            className="previous"
          >
            <i className="fas fa-arrow-alt-circle-left"></i>Previous Category
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/${type}/${next.slug}`} rel="next" className="next">
            Next Category <i className="fas fa-arrow-alt-circle-right"></i>
          </Link>
        )}
      </li>
    </StyledPagination>
  )
}

export default Pagination
