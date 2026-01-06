const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('User', {
  nome: DataTypes.STRING,
  email: DataTypes.STRING
})

module.exports = User
