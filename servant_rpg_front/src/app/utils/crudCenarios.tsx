//Feito pelo chat GPT, com certeza contém erros. Dei uma olhada por cima, e não achei nada muito descarado
"use client";

export interface Cenario {
  id: number;
  name: string;
  families: string;
  characteristics: string;
}

function csrfToken() {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

  return csrfToken;
}

export async function fetchCenarios() {
  try {
    const response = await fetch("http://localhost:8000/en/api/ambients/", {
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

    const cenarios = await response.json();
    return cenarios;
  } catch (error) {
    console.error("Error fetching cenarios:", error);
    throw error;
  }
}

export async function fetchSingleCenario(id: number) {
  try {
    const response = await fetch(
      `http://localhost:8000/en/api/ambients/${id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken(),
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const cenario = await response.json();
    return cenario;
  } catch (error) {
    console.error("Error fetching cenario:", error);
    throw error;
  }
}

export async function sendCenario(cenario: Cenario) {
  try {
    //const formValues = Object.fromEntries(formData.entries());

    const dataToSend = {
      name: cenario.name,
      families: cenario.families,
      characteristics: cenario.characteristics,
    };

    const responseInfos = await fetch(
      "http://localhost:8000/en/api/ambients/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken(),
        },
        credentials: "include",
        body: JSON.stringify(dataToSend),
      }
    );

    if (!responseInfos.ok) {
      throw new Error(
        `Failed to send data: ${responseInfos.status} ${responseInfos.statusText}`
      );
    }

    const resultcenario = await responseInfos.json();
    console.log("cenario created:", resultcenario);

    return resultcenario;
  } catch (error) {
    console.error("Error sending cenario:", error);
    throw error;
  }
}

export async function deleteCenario(id: number): Promise<void> {
  try {
    const response = await fetch(
      `http://localhost:8000/en/api/ambients/${id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken(),
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete the cenario");
    }

    console.log("cenario deleted successfully");
  } catch (error) {
    console.error("Error deleting cenario:", error);
    throw error;
  }
}

export async function editCenario(cenario: Cenario, id: number) {
  try {
    const dataToSend = {
      name: cenario.name,
      families: cenario.families,
      characteristics: cenario.characteristics,
    };

    const response = await fetch(
      `http://localhost:8000/en/api/ambients/${id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken(),
        },
        credentials: "include",
        body: JSON.stringify(dataToSend),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to send data: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    console.log("cenario updated:", result);
    return result;
  } catch (error) {
    console.error("Error updating cenario:", error);
    throw error;
  }
}
