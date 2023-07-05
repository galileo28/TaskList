const { Router } = require('express')
const router = Router()
const { loginUser } = require('../controllers/login')

// Ruta para la autenticación (inicio de sesión)
router.post('/', loginUser)

module.exports = router
