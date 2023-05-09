const pool = require('../config/db')
const getTasks = async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM task')
    res.json({ results })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const createTask = (req, res) => {
  res.status(200).send('Creating a task')
}
const getSingleTask = (req, res) => {
  res.status(200).send('Getting a task')
}
const updateTask = (req, res) => {
  res.status(200).send('Updating a task')
}
const deleteTask = (req, res) => {
  res.status(200).send('Deleting a task')
}

module.exports = { getTasks, createTask, getSingleTask, updateTask, deleteTask }
