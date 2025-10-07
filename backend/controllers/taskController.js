const Task = require('../models/taskModel');

module.exports = {
  // GET: Controlador para buscar todas as tarefas
  getAllTasks: (req, res) => {
    try {
      const tasks = Task.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar tarefas." });
    }
  },

  // POST: Controlador para criar uma nova tarefa
  createTask: (req, res) => {
    try {
      const { text, priority } = req.body;
      if (!text || !priority) {
        return res.status(400).json({ message: "Texto e prioridade são obrigatórios." });
      }
      const newTask = Task.create({ text, priority });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar tarefa." });
    }
  },

  // DELETE: Controlador para deletar uma tarefa
  deleteTask: (req, res) => {
    try {
      const { id } = req.params;
      const result = Task.remove(id);
      if (result) {
        res.status(204).send(); 
      } else {
        res.status(404).json({ message: "Tarefa não encontrada." });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar tarefa." });
    }
  },
};