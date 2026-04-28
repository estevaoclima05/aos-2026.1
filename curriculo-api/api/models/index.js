import { Sequelize } from 'sequelize';
import getUsuario from './Usuario.js';
import getAcademica from './Academica.js';
import getProfissional from './Profissional.js';
import getProjeto from './Projeto.js';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  dialectModule: require("pg"),
  logging: false,
});

const models = {
  Usuario: getUsuario(sequelize),
  Academica: getAcademica(sequelize),
  Profissional: getProfissional(sequelize),
  Projeto: getProjeto(sequelize),
};

models.Usuario.hasMany(models.Academica, { 
  foreignKey: 'usuarioId', 
  onDelete: 'CASCADE', 
  as: 'experiencias_academicas' 
});
models.Academica.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });

models.Usuario.hasMany(models.Profissional, { 
  foreignKey: 'usuarioId', 
  onDelete: 'CASCADE', 
  as: 'experiencias_profissionais' 
});
models.Profissional.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });

models.Usuario.hasMany(models.Projeto, { 
  foreignKey: 'usuarioId', 
  onDelete: 'CASCADE', 
  as: 'projetos' 
});
models.Projeto.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });

export { sequelize };
export default models;