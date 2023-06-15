const bcrypt = require('bcrypt')
const pool = require('../config/db')
const jwt = require('jsonwebtoken')
const config  = require('../config/config')

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Verificar si el usuario existe en la base de datos
    const [userResults] = await pool.query('SELECT * FROM user WHERE email = ?', [email])
    const user = userResults[0]

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Verificar la password ingresada con la password almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };
  
    const token = jwt.sign(userForToken, config.secret, {
      expiresIn: 60 * 60,
    });

    // Autenticación exitosa
    res.status(200).json({ token})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { loginUser }
