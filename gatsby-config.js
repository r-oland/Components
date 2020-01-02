require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Components`,
    description: `Collection of components`,
    author: `Roland Branten`,
    siteUrl: `https://componentsrb.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    "gatsby-plugin-transition-link",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Components`,
        short_name: `Components`,
        start_url: `https://componentsrb.netlify.com/`,
        background_color: `#3D8693`,
        theme_color: `#3D8693`,
        display: `standalone`,
        icon: `icon/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
};
