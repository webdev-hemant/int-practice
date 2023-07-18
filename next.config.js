/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
  },
  env: {},
};

module.exports = nextConfig;
