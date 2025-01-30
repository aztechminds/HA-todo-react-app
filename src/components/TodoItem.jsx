function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const handleEdit = () => {
    const newText = prompt("Edit Text:", todo.text);
    if (newText !== null && newText.trim() !== "") {
      onEdit(todo.id, newText.trim());
    }
  };

  return (
    <li className="flex items-center justify-between p-3 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-blue-600"
        />
        <span
          className={`text-lg mx-4 ${
            todo.done ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
