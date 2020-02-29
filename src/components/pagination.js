import React from 'react';
import { Link } from "gatsby"

const Pagination = ({ previous, next, type }) => (
  <ul
    style={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
    }}
  >
    <li>
      {previous && (
        <Link to={`${type}/${previous.slug}`} rel="prev">
          ← {previous.title}
        </Link>
      )}
    </li>
    <li>
      {next && (
        <Link to={`${type}/${next.slug}`} rel="next">
          {next.title} →
        </Link>
      )}
    </li>
  </ul>
)

export default Pagination