/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_API: process.env.SERVER_API
    },
    reactStrictMode: true,
    swcMinify: true
}

module.exports = nextConfig
