import type { Todo } from "../types/todos";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark ${todo.text} as completed`}
        />

        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Delete
      </button>
    </div>
  );
}