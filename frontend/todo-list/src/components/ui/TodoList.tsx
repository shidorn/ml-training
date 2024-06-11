"use client";
import { fetchTodos } from "@/app/api";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface Todo {
  id: number;
  name: string;
  mark: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await fetchTodos();
    console.log(todos);
    setTodos(todos);
  };

  //   const handleAddTodo = async () => {
  //     const todo = { name: newToodo, mark: false };
  //     await addTodo(todo);
  //     setNewTodo("");
  //     loadTodos();
  //   };

  return (
    <div>
      <h1>TODO LIST</h1>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Checkbox id="terms" checked={todo.mark} />
            <span
              style={{ textDecoration: todo.mark ? "line-through" : "none" }}
            >
              {todo.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
