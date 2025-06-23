/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.glitch.global",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Added Cloudinary
      },
    ],
  },
};

export default nextConfig;
