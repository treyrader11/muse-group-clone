/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: `cdn.prod.website-files` },
      { hostname: `w3.org` },
    ],
  },
};

export default nextConfig;
