/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/showcase",
  siteMetadata: {
    title: `Zola - Showcase`,
    description: `Showcase for personal projects`,
    author: `@zolalsl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `experiment-g-default`,
        short_name: `expg`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#0054a6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
