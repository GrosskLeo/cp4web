const COLORS = [
  "bg-red-100 text-red-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
];

function TodoItem({ todo, removeTodo, index }) {
  const colorClass = COLORS[index % COLORS.length];

  return (
    <li className={`flex items-center justify-between px-4 py-2 my-2 rounded shadow ${colorClass}`}>
      <span>{todo.text}</span>
      {/* botão retirar tarefa */}
      <button
        onClick={() => removeTodo(todo.id)}
        className="ml-4 px-2 py-1 text-black rounded"
        aria-label="Remover tarefa"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;