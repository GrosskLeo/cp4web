import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 mt-15 text-black">To-do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="w-full max-w-md mt-4">
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;