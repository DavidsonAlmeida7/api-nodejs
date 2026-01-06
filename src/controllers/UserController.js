const User = require('../models/User')

class UserController {

  async listar(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch (error) {
      throw new Error(error.message, error);
    }
  }

  async criar(req, res) {
    try {
      const { nome, email } = req.body
      const user = await User.create({ nome, email })
      
      return res.status(201).json(user)
    } catch (error) {
      throw new Error(error.message, error);
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params
      const { nome, email } = req.body

      const user = await User.findByPk(id)
      if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' })

      await user.update({ nome, email })
      return res.json(user)
    } catch (error) {
      throw new Error(error.message, error);
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' })

      await user.destroy()
      return res.status(204).send()
    } catch (error) {
      throw new Error(error.message, error);
    }
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
