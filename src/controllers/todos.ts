import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.json({ message: 'Created The new task!', createdTodo: newTodo });
};

export const fetchTodos: RequestHandler = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};

export const deleteTask: RequestHandler = (req, res, next) => {
    const { id } = req.params;
    const index = TODOS.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        TODOS.splice(index, 1);
        res.sendStatus(204); 
    } else {
        res.status(404).send('Task ID not found!');
    }
};

export const patchTodo: RequestHandler = (req, res, next) => {
    const { id } = req.params;
    const text = (req.body as { text: string }).text;
    const index = TODOS.findIndex((todo) => todo.id === id);

    if (index === -1) {
        res.status(404).json({ message: 'Task ID not found!' });
    }
    TODOS[index].text = text;
    res.json({ message: 'Edited the task!', editedTodo: TODOS[index] });
};
