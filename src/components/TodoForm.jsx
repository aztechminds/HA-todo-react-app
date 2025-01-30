import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    onAddTodo(trimmedInput);
    setInput("");
  };

  return (
    <div>
      <h1 className="font semi-bold">Todo App - React</h1>
      <input
        type="text"
        placeholder="add new todo"
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default TodoForm;
