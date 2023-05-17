const pool = require('../config/db')

const getLists = async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM list')
    res.json({ results })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createList = async (req, res) => {
  try {
    const { name } = req.body
    const [result] = await pool.query('INSERT INTO list (nombre) VALUES (?)', [name])
    res.json({ id: result.insertId, name })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getSingleList = async (req, res) => {
  try {
    const { id } = req.params
    const [results] = await pool.query('SELECT * FROM list WHERE id = ?', [id])
    if (results.length === 0) {
      return res.status(404).json({ message: 'List not found' })
    }
    res.json(results[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateList = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const [result] = await pool.query('UPDATE list SET nombre = ? WHERE id = ?', [name, id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'List not found' })
    }
    res.json({ id, name })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteList = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM list WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'List not found' })
    }
    res.json({ message: 'List deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getLists, getSingleList, createList, updateList, deleteList }
