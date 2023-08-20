/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tecdn.b-cdn.net", "*"], // 임시 , TODO:: 바꿔야됨
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
