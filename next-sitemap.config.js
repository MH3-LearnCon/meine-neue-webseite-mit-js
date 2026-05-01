/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mh-learncon.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/community/members",
      },
    ],
  },
  exclude: ["/community/members"],
  generateIndexSitemap: false,
};
