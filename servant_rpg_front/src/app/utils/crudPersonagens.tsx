"use client";
export async function fetchPersonagens() {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

  try {
    const response = await fetch("http://localhost:8000/en/api/combatants/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
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
import { FormEvent, useState } from "react";

export async function sendPersonagem(formData: FormData) {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

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
        "X-CSRFToken": csrfToken,
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
