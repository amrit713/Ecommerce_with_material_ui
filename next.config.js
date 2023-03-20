/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "bazar-react.vercel.app",
      "images.pexels.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "localhost"
    ],
  },
  reactStrictMode:false
};

module.exports = nextConfig;
