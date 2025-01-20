//Feito pelo chat GPT, com certeza contém erros. Dei uma olhada por cima, e não achei nada muito descarado
"use client";

export interface Group {
  id: number;
  name: string;
  description: string;
  members: number;
}

function csrfToken() {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

  return csrfToken;
}

export async function fetchGroups() {
  try {
    const response = await fetch("http://localhost:8000/en/api/groups/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken(),
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const groups = await response.json();
    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
}

export async function fetchSingleGroup(id: number) {
  try {
    const response = await fetch(`http://localhost:8000/en/api/groups/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken(),
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const group = await response.json();
    return group;
  } catch (error) {
    console.error("Error fetching group:", error);
    throw error;
  }
}

export async function sendGroup(formData: FormData) {
  try {
    const formValues = Object.fromEntries(formData.entries());

    const dataToSend = {
      name: formValues.name,
      description: formValues.description,
    };

    const response = await fetch("http://localhost:8000/en/api/groups/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken(),
      },
      credentials: "include",
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to send data: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    console.log("Group created:", result);
    return result;
  } catch (error) {
    console.error("Error sending group:", error);
    throw error;
  }
}

export async function deleteGroup(id: number): Promise<void> {
  try {
    const response = await fetch(`http://localhost:8000/en/api/groups/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the group");
    }

    console.log("Group deleted successfully");
  } catch (error) {
    console.error("Error deleting group:", error);
    throw error;
  }
}

export async function editGroup(formData: FormData, id: number) {
  try {
    const formValues = Object.fromEntries(formData.entries());

    const dataToSend = {
      name: formValues.name,
      description: formValues.description,
    };

    const response = await fetch(`http://localhost:8000/en/api/groups/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken(),
      },
      credentials: "include",
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to send data: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    console.log("Group updated:", result);
    return result;
  } catch (error) {
    console.error("Error updating group:", error);
    throw error;
  }
}
