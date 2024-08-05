/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.google.com",
      "www.klipfolio.com",
      "image.tmdb.org",
      "www.istockphoto.com",
      "igmmudala.org",
      "cdn2.iconfinder.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};
export default nextConfig;
