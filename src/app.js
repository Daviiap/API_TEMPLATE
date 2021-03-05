const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const routes = require('./routes')
const swaggerDoc = require('./documentation/swagger/swagger.builder')

require('./database')

const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(morgan('tiny'))

// Routes
app.use('/doc', swaggerDoc)

app.use(routes)

module.exports = app
