/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'], unoptimized: true },
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
