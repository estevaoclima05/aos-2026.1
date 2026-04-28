import { projetoService } from '../services/index.js';

export const getAll = async (req, res) => {
  res.json(await projetoService.listAll(req.params.usuarioId));
};

export const getOne = async (req, res) => {
  const item = await projetoService.getById(req.params.usuarioId, req.params.id);
  item ? res.json(item) : res.status(404).json({ message: "Projeto não encontrado" });
};

export const post = async (req, res) => {
  const newItem = await projetoService.create(req.params.usuarioId, req.body);
  res.status(201).json(newItem);
};

export const put = async (req, res) => {
  const updated = await projetoService.update(req.params.usuarioId, req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Registro não encontrado" });
};

export const remove = async (req, res) => {
  await projetoService.remove(req.params.usuarioId, req.params.id);
  res.status(204).send();
};