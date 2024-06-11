"use client";

import { useEffect, useState } from "react";
import { createTodo, deleteTodo, fetchTodos } from "@/app/api";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setNewTodo] = useState<string>("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await fetchTodos();
    setTodos(todos);
  };

  const handleAddTodo = async () => {
    const addTodo = await createTodo({
      title,
    });
    setTodos([...todos, addTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = async (todoId: number) => {
    const removeTodo = await deleteTodo({
      todoId,
    });
    console.log(removeTodo);
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <Input
        type="text"
        value={title}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <Button onClick={handleAddTodo}>Add</Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Checkbox checked={todo.completed} />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
              <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
