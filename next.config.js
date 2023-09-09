/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
