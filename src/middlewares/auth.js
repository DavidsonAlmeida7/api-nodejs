const jwt = require('jsonwebtoken')
const UserToken = require('../models/UserToken')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).json({ erro: 'Token não enviado' })

  const [, token] = authHeader.split(' ')

  try {
    const existsToken = await UserToken.findOne({ where: { token } });

    if (!existsToken) {
        return res.status(401).json({ erro: 'Token inválido ou usuário não existe!' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
  } catch {
    return res.status(401).json({ erro: 'Token inválido' })
  }
}
