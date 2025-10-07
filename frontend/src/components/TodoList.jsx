import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} index={idx} />
      ))}
    </ul>
  );
}

export default TodoList;