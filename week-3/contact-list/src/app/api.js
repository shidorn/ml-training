const API_BASE_URL = "http://localhost:3001";

export async function fetchContacts() {
  try {
    const response = await fetch(`${API_BASE_URL}/contactlist`);
    return response.json();
  } catch (error) {
    return error.message;
  }
}
