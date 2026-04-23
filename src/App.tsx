import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todos";

type Filter = "all" | "active" | "completed";

function App() {
  // ✅ Lazy initialization (FIXES your problem)
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const stored = localStorage.getItem("todos");
      if (!stored) return [];

      const parsed: unknown = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        return parsed as Todo[];
      }

      return [];
    } catch (error) {
      console.error("Failed to load todos:", error);
      return [];
    }
  });

  const [filter, setFilter] = useState<Filter>("all");

  // ✅ Save todos whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos:", error);
    }
  }, [todos]);

  function handleAddTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function handleToggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function handleDeleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // ✅ Derived state (correct approach)
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold">Counter & Todo App</h1>

      <Counter />

      <div className="w-full flex flex-col items-center gap-4">
        <TodoInput onAdd={handleAddTodo} />

        {/* Filters */}
        <div className="flex gap-2 mt-2">
          {(["all", "active", "completed"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f
                  ? "bg-blue-500 text-white"
                  : "bg-white border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />

        {/* Stats */}
        <p className="text-sm text-gray-500">
          {completedCount} / {todos.length} completed
        </p>
      </div>
    </div>
  );
}

export default App;