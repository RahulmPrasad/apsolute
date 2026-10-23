/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export to /out
  output: "export",
  // Emit /about/index.html etc. so plain static hosts resolve routes without rewrites
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
