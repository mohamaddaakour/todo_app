import { useState } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md"
    >
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new task..."
        aria-label="New todo input"
        className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
      >
        Add
      </button>
    </form>
  );
}