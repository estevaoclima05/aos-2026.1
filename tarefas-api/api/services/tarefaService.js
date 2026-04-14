import Tarefa from '../models/tarefa.js';

export const criarTarefa = async (dados) => await Tarefa.create(dados);

export const listarTarefas = async () => await Tarefa.findAll();

export const buscarTarefa = async (id) => await Tarefa.findByPk(id);

export const atualizarTarefa = async (id, dados) => {
    const tarefa = await Tarefa.findByPk(id);
    if (tarefa) {
        return await tarefa.update(dados);
    }
    return null;
};

export const removerTarefa = async (id) => {
    const tarefa = await Tarefa.findByPk(id);
    if (tarefa) {
        await tarefa.destroy();
        return true;
    }
    return false;
};