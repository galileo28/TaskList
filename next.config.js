// module.exports = {
//   async rewrites () {
//     return [
//       {
//         source: '/:path*',
//         destination: 'http://localhost:3001/:path*' // Redirige todas las demás solicitudes al servidor de Express.js
//       }
//     ]
//   }
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
