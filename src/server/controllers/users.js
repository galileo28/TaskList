const pool = require('../config/db')

const getUsers = async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM user')
    res.json({ results })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createUser = async (req, res) => {
  try {
    const { nombre, email, contraseña } = req.body
    const [result] = await pool.query('INSERT INTO user (nombre, email, contraseña) VALUES (?, ?, ?)', [nombre, email, contraseña])
    res.json({ id: result.insertId, nombre, email, contraseña })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params
    const [results] = await pool.query('SELECT * FROM user WHERE id = ?', [id])
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(results[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, email, contraseña } = req.body
    const [result] = await pool.query('UPDATE user SET nombre = ?, email = ?, contraseña = ? WHERE id = ?', [nombre, email, contraseña, id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json({ id, nombre, email, contraseña })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM user WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getUsers, createUser, getSingleUser, updateUser, deleteUser }
