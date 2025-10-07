const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

const readData = () => {
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData);
};

const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

module.exports = {
  // GET: Encontra todas as tarefas
  findAll: () => {
    return readData().tasks;
  },

  // POST: Cria uma nova tarefa
  create: (taskData) => {
    const data = readData();
    const newTask = { 
      id: Date.now(),
      text: taskData.text,
      priority: taskData.priority 
    };
    data.tasks.push(newTask);
    writeData(data);
    return newTask;
  },

  // DELETE: Remove uma tarefa pelo ID
  remove: (id) => {
    const data = readData();
    const taskId = parseInt(id, 10);
    const updatedTasks = data.tasks.filter(task => task.id !== taskId);
    
    if (data.tasks.length === updatedTasks.length) {
      return null;
    }

    data.tasks = updatedTasks;
    writeData(data);
    return true;
  },
};