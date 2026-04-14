import { Router } from 'express';
import * as tarefaController from '../controllers/tarefaController.js';

const router = Router();

router.post('/', tarefaController.criar);
router.get('/', tarefaController.listar);
router.get('/:objectId', tarefaController.buscarPorId);
router.put('/:objectId', tarefaController.atualizar);
router.delete('/:objectId', tarefaController.remover);

export default router;