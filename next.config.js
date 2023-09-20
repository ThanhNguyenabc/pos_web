/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },

  images: {
    domains: [
      "blog.bestpos.com",
      "localhost",
      "bestpos.com",
      "bestpos.breadme.co",
      "res.cloudinary.com",
    ],
    minimumCacheTTL: 2592000,
  },
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: true,
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/request-demo-pos",
        destination: "/?q=request-demo-pos",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
