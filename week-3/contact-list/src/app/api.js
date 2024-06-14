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

export async function deleteContact(contactData) {
  console.log(contactData);
  try {
    const id = contactData.contactId;
    console.log(id);
    const response = await fetch(`${API_BASE_URL}/contactlist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    return error.message;
  }
}
const removeContactId = (obj) => {
  console.log(obj);
  const { id, ...rest } = obj;
  return rest;
};

export async function updateContact(contacData) {
  try {
    const cId = contacData;
    const id = cId.id;
    const data = removeContactId(contacData);
    const response = await fetch(`${API_BASE_URL}/contactlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}
