/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/index.html',
        },
        {
          source: '/servicios',
          destination: '/servicios.html',
        },
        {
          source: '/blog',
          destination: '/blog.html',
        },
      ],
    }
  },
}

export default nextConfig
