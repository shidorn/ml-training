// const API_BASE_URL = "http://localhost:4000";

export async function fetchTodos() {
  try {
    const response = await fetch(`http://localhost:4000/tasks`);
    return response.json();
  } catch (error) {
    return error.message;
  }
}
