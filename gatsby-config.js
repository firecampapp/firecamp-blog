module.exports = {
  siteMetadata: {
    title: `Firecamp, A campsite for developers`,
    name: `Firecamp`,
    siteUrl: `https://novela.narative.co`,
    description: `Execute and build the APIs of your choice [HTTP, WS, GraphQL]`,
    hero: {
      heading: `Everything about APIs space`,
      maxWidth: 1200,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/FirecampHQ`,
      },
      {
        name: `github`,
        url: `https://github.com/firecampapp`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com/company/narative/`,
      // },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Firecamp blog`,
        short_name: `Firecamp blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
