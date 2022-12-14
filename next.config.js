/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
