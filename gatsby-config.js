module.exports = {
  siteMetadata: {
    title: `Ozan Muldur`,
    description: `Freelancer, Web & Mobile Application Developer`,
    author: `@ozanmuldur`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-2xl",
                "heading[depth=2]": "text-xl",
                paragraph: "text-base",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-130181351-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,  
        cookieDomain: "ozanmuldur.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -110,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Recursive light \:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ozan Muldur Personal Website`,
        short_name: `Ozan Muldur`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ozanlogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
