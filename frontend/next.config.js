const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
        port: ""
      },
      {
        protocol: "https",
        hostname: "*",
        port: ""
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "5000"
      },
    ],
  },
}

module.exports = nextConfig
 