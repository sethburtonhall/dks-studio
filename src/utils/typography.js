import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"
import { theme } from "../styles/Theme"
noriegaTheme.headerWeight = "900"

noriegaTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    body: {
      color: `${theme.black}`,
      // font: `100%/1.75 Merriweather, Georgia, serif!important`,
      fontSize: `18px!important`,
      textAlign: `justify`,
    },
    "h1, h2, h3, h4, h5": {
      marginTop: `0`,
    },
  }
}

delete noriegaTheme.googleFonts

const typography = new Typography(noriegaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
