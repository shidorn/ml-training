const API_BASE_URL = "http://localhost:3001";

export async function fetchContacts() {
  try {
    const response = await fetch(`${API_BASE_URL}/contactlist`);
    return response.json();
  } catch (error) {
    return error.message;
  }
}

export async function addContact(contactData) {
  try {
    console.log(contactData);
    const response = await fetch(`${API_BASE_URL}/contactlist`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error("Failed to add contact");
    }
    return await response.json();
  } catch (error) {
    return error.message;
  }
}
