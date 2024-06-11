const API_BASE_URL = "http://localhost:3001";

export async function fetchTodos() {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    return response.json();
  } catch (error) {
    return error.message;
  }
}

export async function createTodo(todoData) {
  try {
    console.log(todoData);
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      throw new Error("Failed to create todo");
    }
    return await response.json();
  } catch (error) {
    return error.message;
  }
}

export async function deleteTodo(todoId) {
  try {
    const cnvrtToNum = todoId;
    const id = cnvrtToNum.todoId;
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}
