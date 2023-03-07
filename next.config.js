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
    domains: ['blog.bestpos.com', "localhost" , "www.bestpos.com" , "www.bestpos.breadme.co"]
  },
  experimental: {
    scrollRestoration: true
  }
};

module.exports = nextConfig;
