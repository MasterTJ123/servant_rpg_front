import personagens from "../../../public/personagens_model/personagens.json";

export async function fetchPersonagens() {
  //use essa função para buscar a lista de personagens cadastrados do banco
  //   const response = await fetch(
  //     "../../../public/personagens_model/personagens.json"
  //   ); // Replace with the actual path to your JSON or API
  //const personagens = await response.json();
  return personagens;
}
