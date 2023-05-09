module.exports = {
  async rewrites () {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3001/:path*' // Redirige todas las demás solicitudes al servidor de Express.js
      }
    ]
  }
}
