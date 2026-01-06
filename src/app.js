const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const app = express()
const sequelize = require('./config/database')

//sequelize.sync()

app.use(cors())
app.use(express.json())
app.use(routes)

module.exports = app
