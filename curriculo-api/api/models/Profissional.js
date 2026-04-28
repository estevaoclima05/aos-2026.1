import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Profissional', {
    empresa: { type: DataTypes.STRING, allowNull: false },
    cargo: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT }
  }, {
    tableName: 'Profissionais'
  });
};