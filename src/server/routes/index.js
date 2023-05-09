const { Router } = require('express')
const router = Router()
const taskRouter = require('./tasks')

router.use('/tasks', taskRouter)

module.exports = router
