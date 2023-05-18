const express = require('express')
const { createUser } = require('../controllers/signup')

const router = express.Router()

// Ruta para crear una cuenta (signup)
router.post('/', createUser)

module.exports = router
