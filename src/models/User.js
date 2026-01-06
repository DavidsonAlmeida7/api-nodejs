const { DataTypes } = require('sequelize')
const sequelize = require('../config/database');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const User = sequelize.define('User', {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  data_cadastro: {
    type: DataTypes.DATE,
    field: 'data_cadastro',
    get() {
      const value = this.getDataValue('data_cadastro');
      return value
        ? dayjs(value).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        : null;
    }
  },
  data_atualizado: {
    type: DataTypes.DATE,
    field: 'data_atualizado',
    get() {
      const value = this.getDataValue('data_atualizado');
      return value
        ? dayjs(value).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        : null;
    }
  }
}, {
  tableName: 'usuario',

  createdAt: 'data_cadastro',
  updatedAt: 'data_atualizado'
});

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return {
    id: values.id,
    nome: values.nome,
    email: values.email,
    data_cadastro: values.data_cadastro,
    data_atualizado: values.data_atualizado
  };
};

module.exports = User
