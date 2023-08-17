const siteURL ="https://bestpos.com";

module.exports = {
  siteUrl: siteURL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,

  exclude: ["/products-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteURL}/products-sitemap.xml`],
  },
};
