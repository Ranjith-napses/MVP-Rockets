// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 💥 This disables the image optimization API
  },
};

module.exports = nextConfig;
