import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Projeto', {
    nome: { type: DataTypes.STRING, allowNull: false },
    tecnologias: { type: DataTypes.STRING },
    link: { type: DataTypes.STRING }
  });
};