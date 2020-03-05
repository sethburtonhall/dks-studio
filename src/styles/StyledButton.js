import styled from "styled-components"
import { theme } from "./Theme"
import { getRandomColor } from "../utils/helpers"

export const Button = styled.button`
  border-radius: 5px;
  font-family: Merriweather, Georgia, serif;
  line-height: 1.75;
  /* background: ${theme.black}; */
  background: ${getRandomColor};
  color: ${theme.white};
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    /* background: ${theme.gray}; */
    background: ${getRandomColor};
    color: ${theme.black};
  }
`
