import { usuarioService } from '../services/index.js';

export const getAll = async (req, res) => res.json(await usuarioService.listAll());
export const getOne = async (req, res) => {
  const user = await usuarioService.getById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "Usuário não encontrado" });
};
export const post = async (req, res) => res.status(201).json(await usuarioService.create(req.body));
export const put = async (req, res) => {
  const updated = await usuarioService.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Usuário não encontrado" });
};
export const remove = async (req, res) => {
  await usuarioService.remove(req.params.id);
  res.status(204).send();
};