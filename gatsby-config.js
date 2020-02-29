module.exports = {
  siteMetadata: {
    title: `David K. Stanley Studio`,
    author: `David K. Stanley`,
    description: `Painting and Illustration`,
    siteUrl: `https://dks-studio.netlify.com/`,
    social: {
      instagram: `davidkstanley.studio`,
      facebook: `https://www.facebook.com/profile.php?id=100023120494669`,
      linkedin: `https://www.linkedin.com/in/david-stanley-b156b970/`,
    },
  },

  plugins: [
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `46e36928d7b1ced4b44f93c94a3cb2`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
