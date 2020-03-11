import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import { theme } from "../styles/Theme"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    body: {
      color: `${theme.black}`,
      font: `100%/1.75 Merriweather, Georgia, serif!important`,
      fontSize: `18px!important`,
      textAlign: `justify`,
    },
    "h1, h2, h3, h4, h5": {
      marginTop: `0`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
