const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rota GET para buscar todas as tarefas
router.get('/tasks', taskController.getAllTasks);

// Rota POST para criar uma nova tarefa
router.post('/tasks', taskController.createTask);

// Rota DELETE para deletar uma tarefa pelo ID
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;