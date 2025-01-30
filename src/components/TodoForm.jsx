import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    onAddTodo(trimmedInput);
    setInput("");
  };

  return (
    <div>
      <h1 className="font-semibold">Todo App - React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          className="border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className = "border"  type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
