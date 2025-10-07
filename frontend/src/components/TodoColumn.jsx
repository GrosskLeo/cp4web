import TodoItem from "./TodoItem";

const columnStyles = {
  Urgente: {
    title: "Urgente",
    bg: "bg-red-100",
    text: "text-red-700",
  },
  Importante: {
    title: "Importante",
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  "Baixa Prioridade": {
    title: "Baixa Prioridade",
    bg: "bg-green-100",
    text: "text-green-700",
  },
};

function TodoColumn({ title, tasks, removeTodo }) {
  const styles = columnStyles[title] || {};

  return (
    
    <div className={`flex-1 p-4 rounded-lg ${styles.bg}`}>
      <h2 className={`text-xl font-bold mb-4 ${styles.text}`}>
        {styles.title}
      </h2>
      
      {/* Lista de tarefas da coluna */}
      <ul>
        {tasks.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoColumn;