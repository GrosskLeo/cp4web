function TodoItem({ todo, removeTodo }) {
  return (
    <li className="flex items-center justify-between px-4 py-2 my-2 rounded shadow bg-white">
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