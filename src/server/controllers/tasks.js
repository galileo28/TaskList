const pool = require('../config/db')

const getTasks = async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM task')
    res.json({ results })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createTask = async (req, res) => {
  try {
    const { name, description, completed, listId } = req.body
    const [result] = await pool.query('INSERT INTO task (nombre, descripcion, completada, lista_id) VALUES (?, ?, ?, ?)', [name, description, completed, listId])
    res.json({ id: result.insertId, name, description, completed, listId })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params
    const [results] = await pool.query('SELECT * FROM task WHERE id = ?', [id])
    if (results.length === 0) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.json(results[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, completed, listId } = req.body
    const [result] = await pool.query('UPDATE task SET nombre = ?, descripcion = ?, completada = ?, lista_id = ? WHERE id = ?', [name, description, completed, listId, id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.json({ id, name, description, completed, listId })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM task WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getTasks, createTask, getSingleTask, updateTask, deleteTask }
