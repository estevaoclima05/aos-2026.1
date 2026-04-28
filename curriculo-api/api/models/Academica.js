import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Academica', {
    instituicao: { type: DataTypes.STRING, allowNull: false },
    curso: { type: DataTypes.STRING, allowNull: false },
    periodo: { type: DataTypes.STRING }
  });
};