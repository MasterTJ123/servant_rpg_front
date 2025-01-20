"use client";
export interface Personagem {
  id: number;
  name: string;
  level: number;
  choosen_class: string;
  family: string;
  life: number;
  armor: number;
  initiative: number;
  spell_slots: string; // Keeping it as string since the backend returns it this way
  weapon_proficiency: number;
  magic_proficiency: number;
  size: number;
  traits: string;
  include_generative: boolean;
}

function csrfToken() {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

  return csrfToken;
}
export async function fetchPersonagens() {
  try {
    const response = await fetch("http://localhost:8000/en/api/combatants/", {
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

    const personagens = await response.json();
    return personagens;
  } catch (error) {
    console.error("Error fetching personagens:", error);
    throw error;
  }
}
//Mandar na requisicao o id do usuario...precisa não, já faz isso por baixo dos panos

export async function fecthSinglePersonagem(id: number) {
  try {
    const response = await fetch(
      `http://localhost:8000/en/api/combatants/${id}/`,
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

    const personagens = await response.json();
    return personagens;
  } catch (error) {
    console.error("Error fetching personagens:", error);
    throw error;
  }
}
export async function sendPersonagem(formData: FormData) {
  try {
    const formValues = Object.fromEntries(formData.entries());

    const dataToSend = {
      name: formValues.nome,
      level: formValues.nivel,
      choosen_class: formValues.classe,
      family: formValues.familia,
      life: formValues.vida,
      armor: formValues.ac,
      initiative: formValues.iniciativa,
      spell_slots: formValues.spellSlots,
      weapon_proficiency: formValues.profA,
      magic_proficiency: formValues.profM,
      size: formValues.tamanho,
      traits: formValues.caracteristicas,
      include_generative: formValues.jogador === "on" ? "true" : "false",
    };

    const response = await fetch("http://localhost:8000/en/api/combatants/", {
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
    console.log("Personagem created:", result);
    return result;
  } catch (error) {
    console.error("Error sending personagem:", error);
    throw error;
  }
}

export async function deletePersonagem(id: number): Promise<void> {
  try {
    const response = await fetch(
      `http://localhost:8000/en/api/combatants/${id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you're using a token stored in localStorage for authentication
        }, //sera que esse auth diferente da certo, ou vai dar 401?
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete the combatant");
    }

    console.log("Combatant deleted successfully");
  } catch (error) {
    console.error("Error deleting combatant:", error);
    throw error;
  }
}

export async function editPersonagem(formData: FormData, id: number) {
  try {
    const formValues = Object.fromEntries(formData.entries());

    const dataToSend = {
      name: formValues.nome,
      level: formValues.nivel,
      choosen_class: formValues.classe,
      family: formValues.familia,
      life: formValues.vida,
      armor: formValues.ac,
      initiative: formValues.iniciativa,
      spell_slots: formValues.spellSlots,
      weapon_proficiency: formValues.profA,
      magic_proficiency: formValues.profM,
      size: formValues.tamanho,
      traits: formValues.caracteristicas,
      include_generative: formValues.jogador === "on" ? "true" : "false",
    };

    const response = await fetch(
      `http://localhost:8000/en/api/combatants/${id}/`,
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
    console.log("Personagem created:", result);
    return result;
  } catch (error) {
    console.error("Error sending personagem:", error);
    throw error;
  }
}
