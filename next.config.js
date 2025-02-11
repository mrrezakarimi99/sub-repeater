/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

const withPWA = require('next-pwa');
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: true
  }
});

module.exports = nextConfig;
