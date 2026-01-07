const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,

    timezone: '-03:00', // horário de São Paulo

    dialectOptions: {
      timezone: 'local',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    define: {
     charset: 'utf8mb4',
     collate: 'utf8mb4_unicode_ci'
    }
  }
)

module.exports = sequelize
