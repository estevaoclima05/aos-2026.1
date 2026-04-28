import models from '../models/index.js';

export const listAll = async (usuarioId) => await models.Projeto.findAll({ where: { usuarioId } });
export const getById = async (usuarioId, id) => await models.Projeto.findOne({ where: { id, usuarioId } });
export const create = async (usuarioId, data) => await models.Projeto.create({ ...data, usuarioId });
export const update = async (usuarioId, id, data) => {
  const item = await models.Projeto.findOne({ where: { id, usuarioId } });
  return item ? await item.update(data) : null;
};
export const remove = async (usuarioId, id) => {
  const item = await models.Projeto.findOne({ where: { id, usuarioId } });
  return item ? await item.destroy() : null;
};