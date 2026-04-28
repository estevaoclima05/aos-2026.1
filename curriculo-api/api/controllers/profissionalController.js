import { profissionalService } from '../services/index.js';

export const getAll = async (req, res) => {
  res.json(await profissionalService.listAll(req.params.usuarioId));
};

export const getOne = async (req, res) => {
  const item = await profissionalService.getById(req.params.usuarioId, req.params.id);
  item ? res.json(item) : res.status(404).json({ message: "Experiência profissional não encontrada" });
};

export const post = async (req, res) => {
  const newItem = await profissionalService.create(req.params.usuarioId, req.body);
  res.status(201).json(newItem);
};

export const put = async (req, res) => {
  const updated = await profissionalService.update(req.params.usuarioId, req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Registro não encontrado" });
};

export const remove = async (req, res) => {
  await profissionalService.remove(req.params.usuarioId, req.params.id);
  res.status(204).send();
};