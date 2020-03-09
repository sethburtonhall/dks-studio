import styled from "styled-components"

export const StyledPagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    a {
      box-shadow: none;

      &.previous i {
        margin-right: 5px;
      }

      &.next i {
        margin-left: 2px;
      }
    }
  }
`
