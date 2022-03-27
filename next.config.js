/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    return config
  },
}
module.exports = withImages(nextConfig);

