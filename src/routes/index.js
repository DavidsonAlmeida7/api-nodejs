const { Router } = require('express')
const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/users-mocks', UserController.listarMocks)

routes.get('/users', UserController.listar)
routes.post('/users', UserController.criar)
routes.put('/users/:id', UserController.atualizar)
routes.delete('/users/:id', UserController.deletar)

module.exports = routes
