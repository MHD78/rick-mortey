/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        // pathname: "api/character/avatar/**",
      },
    ],
  },
};

module.exports = nextConfig;
