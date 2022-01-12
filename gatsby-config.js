module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "doctors directory"
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "DOCTORS_DIRECTORY",
        fieldName: "doctors_directory",
        url: "http://localhost:5000/graphql"
      }
    }
  ]
};
