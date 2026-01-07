const User = require('../models/User')
const UserToken = require('../models/UserToken')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class AuthController {

  async register(req, res) {
    const { nome, email, senha } = req.body

    const userExists = await User.findOne({ where: { email } })
    if (userExists) return res.status(400).json({ erro: 'Usuário já existe' })

    const user = await User.create({ nome, email, senha })

    return res.status(201).json(user)
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body
  
      const user = await User.findOne({ where: { email } })
      if (!user) return res.status(401).json({ erro: 'Credenciais inválidas' })
  
      const valid = await bcrypt.compare(senha, user.senha)
      if (!valid) return res.status(401).json({ erro: 'Credenciais inválidas' })
  
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
      )
  
      console.log(token)
  
      if (token) {
          await UserToken.create({ usuario_id: user.id, token: token, data_expiracao: new Date(Date.now() + 60 * 60 * 1000) })
      }
  
      return res.json({ user, token })
    } catch (error) {
        throw new Error(error.message, error)
    }
  }
}

module.exports = new AuthController()
