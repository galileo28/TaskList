const { Router } = require('express')
const router = Router()
const taskRouter = require('./tasks')
const listRouter = require('./lists')
const userRouter = require('./users')

router.use('/task', taskRouter)
router.use('/list', listRouter)
router.use('/user', userRouter)
module.exports = router
