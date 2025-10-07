function TodoItem({ todo, removeTodo }) {

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "Urgente":
        return "bg-red-500 text-white";
      case "Importante":
        return "bg-amber-500 text-white";
      case "Baixa Prioridade":
        return "bg-green-500 text-white";
      default:
        return "bg-white"; 
    }
  };

  return (
    <li
      className={`flex items-center justify-between px-4 py-3 my-2 rounded shadow transition-colors duration-300 ${getPriorityClass(
        todo.priority
      )}`}
    >
      <span>{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="ml-4 px-2 py-1 bg-white/20 hover:bg-white/40 text-white font-bold rounded"
        aria-label="Remover tarefa"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;