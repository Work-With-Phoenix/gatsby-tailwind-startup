module.exports = {
  siteMetadata: {
    title: `gatsby-tailwind-startup`,
    description: `Gatsby project startup template configured with tailwindcss`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
	`gatsby-plugin-postcss`,
  {
    resolve:`gatsby-plugin-manifest`,
    options:{
      name: `gatsby-tailwind-startup`,
      short_name: `gtstarter`,
      start_url: `/`,
      display: `minimal-ui`,
      icon:`src/images/phoenix-icon.png`
    }
  }
  ],
}
