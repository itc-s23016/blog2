/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cal.syoboi.jp/:path*'
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/*/*/*'
      }
    ]
  }
}
module.exports = nextConfig
