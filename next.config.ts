import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: { formats: ['image/avif', 'image/webp'] },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
