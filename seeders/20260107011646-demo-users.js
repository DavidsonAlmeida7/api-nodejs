'use strict';

const bcrypt = require('bcryptjs'); // se quiser senhas hashed

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuario', [
      {
        nome: 'Admin',
        email: 'admin@exemplo.com',
        senha: bcrypt.hashSync('123456', 10),
        data_cadastro: new Date(),
        data_atualizado: new Date()
      },
      {
        nome: 'Usuário Teste',
        email: 'teste@exemplo.com',
        senha: bcrypt.hashSync('123456', 10),
        data_cadastro: new Date(),
        data_atualizado: new Date()
      },
      {
        nome: 'Davidson Almeida',
        email: 'davidson@exemplo.com',
        senha: bcrypt.hashSync('123456', 10),
        data_cadastro: new Date(),
        data_atualizado: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
