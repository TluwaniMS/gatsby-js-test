module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "doctors directory"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        url: "http://localhost:5000/graphql"
      }
    }
  ]
};
