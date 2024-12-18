import grupos from "../../../public/personagens_model/grupos.json";

export async function fetchGrupos() {
  //use essa função para buscar a lista de personagens cadastrados do banco
  //   const response = await fetch(
  //     "../../../public/personagens_model/personagens.json"
  //   ); // Replace with the actual path to your JSON or API
  //const personagens = await response.json();
  return grupos;
}
