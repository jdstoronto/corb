module.exports = {
  siteMetadata: {
    siteUrl: "https://www.pre-corb.com",
    title: "CORB_Website",
  },
  pathPrefix: "/corb",
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL || "http://pre-corb.com/graph",
        hostingWPCOM: false,
        useACF: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "leader-line-new",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
