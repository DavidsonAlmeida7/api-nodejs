require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`🚀 API rodando na porta ${PORT}`)
})