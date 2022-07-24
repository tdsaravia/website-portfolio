module.exports = {
  siteMetadata: {
    title: `My Website Porftolio`,
    siteUrl: `https://tobii-saravia.github.io`,
  },
  plugins: [ "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icons/Logo.png"
    }
  }]
};
