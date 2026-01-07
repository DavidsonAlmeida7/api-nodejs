const { DataTypes } = require('sequelize')
const sequelize = require('../config/database');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const UsuarioToken = sequelize.define(
    'UsuarioToken',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
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
      data_expiracao: {
        type: DataTypes.DATE,
        field: 'data_expiracao',
        get() {
          const value = this.getDataValue('data_expiracao');
          return value
            ? dayjs(value).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
            : null;
        }
      }
    },
    {
      tableName: 'usuario_token',
      freezeTableName: true,
      timestamps: true,
      createdAt: 'data_cadastro',
      updatedAt: false,
      expiresAt: 'data_expiracao'
    }
);

// Associação com User
UsuarioToken.associate = function (models) {
  UsuarioToken.belongsTo(models.User, {
    foreignKey: 'usuario_id',
    as: 'usuario'
  });
};

module.exports = UsuarioToken;