const { Router } = require('express')
const router = Router()
const taskRouter = require('./tasks')
const listRouter = require('./lists')
const userRouter = require('./users')
const authRouter = require('./auth')
const signupRouter = require('./signup')

router.use('/task', taskRouter)
router.use('/list', listRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/signup', signupRouter)
module.exports = router
