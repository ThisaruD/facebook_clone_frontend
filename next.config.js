/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["upload.wikimedia.org","www.freeiconspng.com",
    "platform-lookaside.fbsbx.com","images.pexels.com"]
  }
}

module.exports = nextConfig
