"use client";

import { useEffect, useState } from "react";
import { updateTodo, createTodo, deleteTodo, fetchTodos } from "@/app/api";
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

  const handleChangeTodo = async (todoId: number, completed: any) => {
    const editTodo = await updateTodo({
      todoId,
      completed,
    });
    if (editTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>TODO LIST</h1>
      <div style={{ display: "inline-flex" }}>
        {" "}
        <Input
          type="text"
          value={title}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
          style={{ marginRight: "10px" }}
        />
        <Button onClick={handleAddTodo}>Add</Button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginTop: "10px" }}>
            <Checkbox
              checked={todo.completed}
              onCheckedChange={(checked) => handleChangeTodo(todo.id, checked)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <Button
              onClick={() => handleDeleteTodo(todo.id)}
              variant="destructive"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
