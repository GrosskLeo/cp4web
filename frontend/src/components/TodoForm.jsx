import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Baixa Prioridade");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text, priority);
    setText("");
    setPriority("Baixa Prioridade"); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 p-4 bg-white rounded-lg shadow-lg max-w-md w-full mx-auto"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
        className="flex-1 w-full px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-200"
      />
      
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full sm:w-auto px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-200"
      >
        <option value="Baixa Prioridade">Baixa</option>
        <option value="Importante">Importante</option>
        <option value="Urgente">Urgente</option>
      </select>
      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition font-semibold"
      >
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;