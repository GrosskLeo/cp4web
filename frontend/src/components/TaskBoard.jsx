import { useState, useEffect } from "react";
import TodoColumn from "./TodoColumn";
import TodoForm from "./TodoForm";

const API_URL = 'http://localhost:5000/api/tasks';

function TaskBoard() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Falha ao buscar tarefas');
        const tasks = await response.json();
        setTodos(tasks);
      } catch (error) {
        console.error(error);
      }
    };
    loadTasks();
  }, []);


  const addTodo = async (text, priority) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, priority }),
      });
      if (!response.ok) throw new Error('Falha ao criar tarefa');
      
      const savedTask = await response.json();
      setTodos([...todos, savedTask]);
    } catch (error) {
      console.error(error);
    }
  };


  const removeTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Falha ao deletar tarefa');
      
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };


  const urgentTasks = todos.filter((todo) => todo.priority === "Urgente");
  const importantTasks = todos.filter((todo) => todo.priority === "Importante");
  const lowPriorityTasks = todos.filter((todo) => todo.priority === "Baixa Prioridade");

  return (
    <>
      <TodoForm addTodo={addTodo} />

      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        <TodoColumn title="Urgente" tasks={urgentTasks} removeTodo={removeTodo} />
        <TodoColumn title="Importante" tasks={importantTasks} removeTodo={removeTodo} />
        <TodoColumn title="Baixa Prioridade" tasks={lowPriorityTasks} removeTodo={removeTodo} />
      </div>
    </>
  );
}

export default TaskBoard;