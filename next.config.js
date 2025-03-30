/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ This enables the /app directory
  },
};

module.exports = nextConfig;
