"use server";
import { fetchGrupos } from "../utils/fetchGrupos";
import "./gerenciarGrupo";
import GerenciarGrupo from "./gerenciarGrupo";
export default async function Grupo() {
  //O que preciso ter no grupo?
  //Nome do grupo
  //Nome da campanha da qual esse grupo fazer parte (vale a pena?)
  //lista dos personagens disponíveis para acrescentar no grupo
  //Lista dos personagens que já estão no grupo
  //vai ser do mesmo modelo que gerenciar ficha!!
  const grupos = await fetchGrupos();

  return (
    <div>
      <GerenciarGrupo grupos={grupos} />
    </div>
  );
}
