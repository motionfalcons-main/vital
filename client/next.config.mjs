/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/**",
         },
         // Replace this with your own image CDN or object storage domain if needed
         // {
         //    protocol: "https",
         //    hostname: "cdn.your-app-domain.com",
         //    port: "",
         //    pathname: "/**",
         // },
         {
            protocol: "https",
            hostname: "plus.unsplash.com",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "media.istockphoto.com",
            port: "",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
