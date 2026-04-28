import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Usuario', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { isEmail: true } },
    bio: { type: DataTypes.TEXT }
  });
};