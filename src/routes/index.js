const { Router } = require('express')
const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/users-mocks', UserController.listarMocks)

routes.get('/users', UserController.listar)
routes.post('/user', UserController.criar)
routes.put('/user/:id', UserController.atualizar)
routes.delete('/user/:id', UserController.deletar)

module.exports = routes
