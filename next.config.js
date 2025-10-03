/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: true,
  images: { unoptimized: true },
  output: 'export',
  distDir: 'out',
};

module.exports = nextConfig;

