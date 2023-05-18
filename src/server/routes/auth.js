const { Router } = require('express')
const router = Router()
const { loginUser } = require('../controllers/auth')

// Ruta para la autenticación (inicio de sesión)
router.post('/login', loginUser)

module.exports = router
