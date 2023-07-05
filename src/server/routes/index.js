const { Router } = require('express')
const router = Router()
const taskRouter = require('./tasks')
const listRouter = require('./lists')
const userRouter = require('./users')
const authRouter = require('./login')
const signupRouter = require('./signup')

router.use('/task', taskRouter)
router.use('/list', listRouter)
router.use('/user', userRouter)
router.use('/login', authRouter)
router.use('/signup', signupRouter)
module.exports = router
