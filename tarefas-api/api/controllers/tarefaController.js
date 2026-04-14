import * as tarefaService from '../services/tarefaService.js';

export const criar = async (req, res) => {
    const { descricao, concluida } = req.body;
    
    if (!descricao) {
        return res.status(400).json({ erro: "A descrição é obrigatória." });
    }

    const novaTarefa = await tarefaService.criarTarefa({ descricao, concluida });
    res.status(201).json(novaTarefa);
};

export const listar = async (req, res) => {
    const tarefas = await tarefaService.listarTarefas();
    res.json(tarefas);
};

export const buscarPorId = async (req, res) => {
    const tarefa = await tarefaService.buscarTarefa(req.params.objectId);
    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }
    res.json(tarefa);
};

export const atualizar = async (req, res) => {
    const tarefa = await tarefaService.atualizarTarefa(req.params.objectId, req.body);
    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }
    res.json(tarefa);
};

export const remover = async (req, res) => {
    const removido = await tarefaService.removerTarefa(req.params.objectId);
    if (!removido) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }
    res.status(204).send();
};