import personagens from "../../../public/personagens_model/personagens.json";

export async function fetchPersonagens() {
  // try {
  //   const response = await fetch("http://localhost:8000/en/api/combatants/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(
  //       `Failed to fetch: ${response.status} ${response.statusText}`
  //     );
  //   }

  //   const personagens = await response.json();
  //   return personagens;
  // } catch (error) {
  //   console.error("Error fetching personagens:", error);
  //   throw error;
  // }
  return personagens;
}
