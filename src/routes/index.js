const { Router } = require('express')
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthController')
const authMiddleware = require('../middlewares/auth')

const routes = Router()

routes.post('/registrar', AuthController.register)
routes.post('/login', AuthController.login)

// Rotas protegidas

routes.get('/users', authMiddleware, UserController.listar)
routes.post('/user', authMiddleware, UserController.criar)
routes.put('/user/:id', authMiddleware, UserController.atualizar)
routes.delete('/user/:id', authMiddleware, UserController.deletar)

module.exports = routes
