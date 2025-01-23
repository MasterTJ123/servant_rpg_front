"use client";
import { useEffect, useState } from "react";
import { fetchGroups } from "../utils/crudGrupos";
import "./gerenciarGrupo";
import GerenciarGrupo from "./gerenciarGrupo";
import { fetchPersonagens } from "../utils/crudPersonagens";
export default function Grupo() {
  //O que preciso ter no grupo?
  //Nome do grupo
  //Nome da campanha da qual esse grupo fazer parte (vale a pena?)
  //lista dos personagens disponíveis para acrescentar no grupo
  //Lista dos personagens que já estão no grupo
  //vai ser do mesmo modelo que gerenciar ficha!!

  //Sera que nao eh melhor carregar essa funcao direto no componente, e deixar isso server side mesmo?

  const [grupos, setGrupos] = useState([]);
  const [personagens, setPersonagens] = useState([]); //recebe a lista de personagens disponiveis para o usuario
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGrupos = async () => {
      try {
        const groups = await fetchGroups();
        const characters = await fetchPersonagens();
        setGrupos(groups); // Update state with fetched data
        setPersonagens(characters);
      } catch (error) {
        console.log(error);
        setError("Error fetching personagens");
        setGrupos([]); // Return empty list in case of error
      }
    };

    loadGrupos();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <GerenciarGrupo grupos={grupos} personagens={personagens} />
    </div>
  );
}
