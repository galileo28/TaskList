const { Router } = require('express')
const router = Router()
const { getTasks, createTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getSingleTask).put(updateTask).delete(deleteTask)

module.exports = router
