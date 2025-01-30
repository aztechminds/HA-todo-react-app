import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 p-4">No todos yet. Add some!</p>
      )}
    </ul>
  );
}

export default TodoList;
