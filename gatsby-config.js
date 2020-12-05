module.exports = {
  siteMetadata: {
    title: `DKS Studio`,
    author: `David K. Stanley`,
    description: `Painting and Illustration`,
    siteUrl: `https://davidkstanley.studio/`,
    social: {
      instagram: `https://www.instagram.com/davidkstanley.studio/`,
      facebook: `https://www.facebook.com/profile.php?id=100023120494669`,
      linkedin: `https://www.linkedin.com/in/david-stanley-b156b970/`,
    },
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `46e36928d7b1ced4b44f93c94a3cb2`,
        preview: false,
        disableLiveReload: false,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: `46e36928d7b1ced4b44f93c94a3cb2`,
              maxWidth: 930,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David K. Stanley Illustration`,
        short_name: `DKS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dks-icon.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
