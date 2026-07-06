/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mh-learncon.com",
  trailingSlash: true,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/community/members", "/styleguide", "/newsletter-bestaetigt"],
      },
    ],
  },
  exclude: ["/community/members", "/styleguide", "/newsletter-bestaetigt"],
  generateIndexSitemap: false,
};
