/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }, {hostname: "cdn.glitch.global"}],
  },
};

export default nextConfig;
