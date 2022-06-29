/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/_error",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
