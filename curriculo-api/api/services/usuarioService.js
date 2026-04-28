import models from '../models/index.js';

export const listAll = async () => {
  return await models.Usuario.findAll({
    include: [
      { model: models.Academica, as: 'experiencias_academicas' },
      { model: models.Profissional, as: 'experiencias_profissionais' },
      { model: models.Projeto, as: 'projetos' }
    ]
  });
};

export const getById = async (id) => {
  return await models.Usuario.findByPk(id, {
    include: [
      { model: models.Academica, as: 'experiencias_academicas' },
      { model: models.Profissional, as: 'experiencias_profissionais' },
      { model: models.Projeto, as: 'projetos' }
    ]
  });
};

export const create = async (data) => await models.Usuario.create(data);

export const update = async (id, data) => {
  const user = await models.Usuario.findByPk(id);
  return user ? await user.update(data) : null;
};

export const remove = async (id) => {
  const user = await models.Usuario.findByPk(id);
  return user ? await user.destroy() : null;
};