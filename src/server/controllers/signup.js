const bcrypt = require('bcrypt')
const pool = require('../config/db')

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Verificar si el usuario ya existe en la base de datos
    const [existingUser] = await pool.query('SELECT * FROM user WHERE email = ?', [email])
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Encriptar la password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Crear el nuevo usuario en la base de datos
    const [result] = await pool.query('INSERT INTO user (nombre, email, contraseña) VALUES (?, ?, ?)', [
      name,
      email,
      hashedPassword
    ])

    res.json({ id: result.insertId, name, email })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createUser }
