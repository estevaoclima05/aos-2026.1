import { academicaService } from '../services/index.js';

export const getAll = async (req, res) => res.json(await academicaService.listAll(req.params.usuarioId));

export const getOne = async (req, res) => {
  const item = await academicaService.getById(req.params.usuarioId, req.params.id);
  item ? res.json(item) : res.status(404).json({ message: "Registro não encontrado" });
};

export const post = async (req, res) => res.status(201).json(await academicaService.create(req.params.usuarioId, req.body));

export const put = async (req, res) => {
  const updated = await academicaService.update(req.params.usuarioId, req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Registro não encontrado" });
};

export const remove = async (req, res) => {
  await academicaService.remove(req.params.usuarioId, req.params.id);
  res.status(204).send();
};