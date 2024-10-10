import { Router } from 'express';
import {createTodo, deleteTask, fetchTodos, patchTodo} from '../controllers/todos'

const router = Router();

router.post('/', createTodo);

router.get('/', fetchTodos);

router.patch('/:id', patchTodo);

router.delete('/:id', deleteTask);

export default router;