require('dotenv').config({})
const cors = require('cors')
const express = require('express')
const router = require('./routes')
const { host, port } = require('./config/config')
console.log(process.env)
const app = express()
app.use(cors())

app.use('/api/v1', router)

app.listen(port, host, () => {
  console.log(`Server running on ${port}`)
})
