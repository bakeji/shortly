/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://cleanuri.com/api/:path*'
          }
        ]
      },
};

export default nextConfig;
