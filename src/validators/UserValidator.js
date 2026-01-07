const yup = require('yup')

exports.create = yup.object({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(6).required()
})

exports.login = yup.object({
  email: yup.string().email().required(),
  senha: yup.string().required()
})
