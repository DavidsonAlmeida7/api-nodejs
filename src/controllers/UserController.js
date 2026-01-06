const User = require('../models/User')

class UserController {

  async listar(req, res) {
    const users = await User.findAll()
    return res.json(users)
  }

  async criar(req, res) {
    const { nome, email } = req.body
    const user = await User.create({ nome, email })
    return res.status(201).json(user)
  }

  async atualizar(req, res) {
    const { id } = req.params
    const { nome, email } = req.body

    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' })

    await user.update({ nome, email })
    return res.json(user)
  }

  async deletar(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' })

    await user.destroy()
    return res.status(204).send()
  }

  listarMocks(req, res) {
    return res.json([
      { id: 1, nome: 'Davidson' },
      { id: 2, nome: 'João' },
      { id: 3, nome: 'Maria' },
      { id: 4, nome: 'Carlos' },
      { id: 5, nome: 'Debora' },
      { id: 6, nome: 'Oliveira' },
    ])
  }
}

module.exports = new UserController()
