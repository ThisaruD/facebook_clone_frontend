/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["upload.wikimedia.org","www.freeiconspng.com"]
  }
}

module.exports = nextConfig
