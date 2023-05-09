const express = require('express')
const router = require('./routes')
require('dotenv').config({})
const { host, port } = require('./config/config')

const app = express()

app.use('/api/v1', router)

app.listen(port, host, () => {
  console.log(`Server running on ${port}`)
})
