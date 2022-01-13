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
    {
      resolve: "gatsby-source-woocommerce",
      options: {
    // Base URL of WordPress site
      api: 'wordpress.domain',
    // true if using https. false otherwise.
      https: false,
      api_keys: {
        consumer_key: `ck_20b57dec70c323ddbdc2b0bed6ffc740180338cf`,
        consumer_secret: `cs_025828c1e6e5a48cfd3f59d775b8c7462858b347`,
      },
    // Array of strings with fields you'd like to create nodes for...
      fields: ['products', 'products/categories', 'products/attributes'],
      }
    },
  ],
};
