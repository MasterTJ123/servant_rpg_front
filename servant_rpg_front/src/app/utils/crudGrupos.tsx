//Feito pelo chat GPT, com certeza contém erros. Dei uma olhada por cima, e não achei nada muito descarado
"use client";

export interface Grupo {
  id: number;
  name: string;
  campaign: string;
  fichasAtuais: number[]; // Array com os nomes dos jogadores
}

function csrfToken() {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

  return csrfToken;
}

export async function fetchGroups(): Promise<Grupo[]> {
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

    // Fetch combatants for each group and build the structure
    const groupsWithCombatants: Grupo[] = await Promise.all(
      groups.map(async (group: any) => {
        try {
          const combatantsResponse = await fetch(
            `http://localhost:8000/en/api/groups/${group.id}/combatants/`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken(),
              },
              credentials: "include",
            }
          );

          if (!combatantsResponse.ok) {
            console.warn(
              `Failed to fetch combatants for group ${group.id}: ${combatantsResponse.status} ${combatantsResponse.statusText}`
            );
            return {
              id: group.id,
              name: group.name,
              campaign: group.campaign,
              fichasAtuais: [],
            }; // Return the group without combatants in case of an error
          }

          const combatantsData = await combatantsResponse.json();
          return {
            id: group.id,
            name: group.name,
            campaign: group.campaign,
            fichasAtuais: combatantsData.combatant_ids,
          };
        } catch (error) {
          console.error(
            `Error fetching combatants for group ${group.id}:`,
            error
          );
          return {
            id: group.id,
            name: group.name,
            campaign: group.campaign,
            fichasAtuais: [],
          }; // Handle error and continue
        }
      })
    );

    return groupsWithCombatants;
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
}

export async function fetchSingleGroup(id: number): Promise<Grupo> {
  try {
    // Fetch the group details
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
        `Failed to fetch group: ${response.status} ${response.statusText}`
      );
    }

    const group = await response.json();

    // Fetch the combatants for the group
    try {
      const combatantsResponse = await fetch(
        `http://localhost:8000/en/api/groups/${id}/combatants/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken(),
          },
          credentials: "include",
        }
      );

      if (!combatantsResponse.ok) {
        console.warn(
          `Failed to fetch combatants for group ${id}: ${combatantsResponse.status} ${combatantsResponse.statusText}`
        );
        return {
          id: group.id,
          name: group.name,
          campaign: group.campaign,
          fichasAtuais: [], // Return empty array if combatants request fails
        };
      }

      const combatantsData = await combatantsResponse.json();

      // Construct and return the Grupo object
      return {
        id: group.id,
        name: group.name,
        campaign: group.campaign,
        fichasAtuais: combatantsData.combatant_ids,
      };
    } catch (error) {
      console.error(`Error fetching combatants for group ${id}:`, error);
      return {
        id: group.id,
        name: group.name,
        campaign: group.campaign,
        fichasAtuais: [], // Handle error gracefully
      };
    }
  } catch (error) {
    console.error("Error fetching group:", error);
    throw error;
  }
}

export async function sendGroup(grupo: Grupo) {
  try {
    //const formValues = Object.fromEntries(formData.entries());

    const dataToSend = {
      name: grupo.name,
      campaign: grupo.campaign,
    };

    const responseInfos = await fetch("http://localhost:8000/en/api/groups/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken(),
      },
      credentials: "include",
      body: JSON.stringify(dataToSend),
    });

    if (!responseInfos.ok) {
      throw new Error(
        `Failed to send data: ${responseInfos.status} ${responseInfos.statusText}`
      );
    }

    const resultGroup = await responseInfos.json();
    console.log("Group created:", resultGroup);
    const idsToSendDict = grupo.fichasAtuais.map((combatantId) => ({
      combatant: combatantId,
      group: resultGroup.id,
      group_entry: "2025-12-19",
      group_exit: "2099-12-19",
    }));

    const responses = await Promise.all(
      idsToSendDict.map((data) =>
        fetch("http://localhost:8000/en/api/combatants-groups/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken(),
          },
          credentials: "include",
          body: JSON.stringify(data),
        })
      )
    );

    // Handle responses (check for errors or process success)
    const responseResults = await Promise.all(
      responses.map((res) => res.json())
    );

    console.log("All responses received:", responseResults);

    return resultGroup;
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
        "X-CSRFToken": csrfToken(),
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

// //Fazendo a disgraca da selecao no frontend, pq neh, fodasse
// export async function aMerdaDosCombatentesDoGrupo(id: number) {
//   try {
//     const response = await fetch(
//       `http://localhost:8000/en/api/groups/${id}/combatants/`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRFToken": csrfToken(),
//         },
//         credentials: "include",
//       }
//     );

//     if (!response.ok) {
//       console.log(response);
//       throw new Error(
//         `Failed to fetch: ${response.status} ${response.statusText}`
//       );
//     }

//     const group = await response.json();
//     console.log(
//       "A merda do que ta sendo retornado pela rota desgracada:",
//       group
//     );
//     return group;
//   } catch (error) {
//     console.error("Error fetching group:", error);
//     throw error;
//   }
// }
