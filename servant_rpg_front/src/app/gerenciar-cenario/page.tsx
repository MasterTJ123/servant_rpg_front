"use server";

import { fetchCenarios } from "../utils/fetchCenarios";
import GerenciarCenario from "./gerenciarCenario";

export default async function Cenario() {
  //O que preciso ter no Cenario?
  //Nome do Cenario
  //Nome da campanha da qual esse Cenario fazer parte (vale a pena?)
  //lista dos personagens disponíveis para acrescentar no Cenario
  //Lista dos personagens que já estão no Cenario
  //vai ser do mesmo modelo que gerenciar ficha!!
  const cenarios = await fetchCenarios();

  return (
    <div>
      <GerenciarCenario cenarios={cenarios} />
    </div>
  );
}
