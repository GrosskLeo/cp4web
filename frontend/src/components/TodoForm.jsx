import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-lg max-w-md w-full mx-auto"
    >
      {/* input tarefa */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
        className="flex-1 px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-200"
      />
      {/* botão adicinar */}
      <button
        type="submit"
        className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition font-semibold"
      >
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;