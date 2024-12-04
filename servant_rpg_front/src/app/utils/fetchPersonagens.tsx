import personagens from "../../../public/personagens_model/personagens.json";

export async function fetchPersonagens() {
  //   const response = await fetch(
  //     "../../../public/personagens_model/personagens.json"
  //   ); // Replace with the actual path to your JSON or API
  //const personagens = await response.json();
  return personagens;
}
