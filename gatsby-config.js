require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `Brunzies`,
    description: `Brunzies - Established in 2013, 
      Brunzies is a casual neighborhood bar and grill 
      specializing in craft beer, burgers and pizzas.  
      It is a perfect place to meet friends, grab a bite 
      to eat, watch a game on one of our 8 big screen TV's 
      or to just relax and have a drink.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brunzies bar and grille`,
        short_name: `Brunzies`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brunzies-icon-2.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Merriweather:400,300,300italic,400italic,700,700italic', 
            'Merriweather+Sans:400,700',
            'Pragati+Narrow:400,700',
            'Kaushan Script'
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/menus/`,
      },
    },
    `gatsby-transformer-pdf`,
    {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        key: process.env.GATSBY_YOUR_GOOGLE_MAPS_GEOCODING_API_KEY,
        address: process.env.GATSBY_ADDRESS_YOU_ARE_GEOCODING
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
