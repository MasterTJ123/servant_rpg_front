"use client";
import { useEffect, useState } from "react";
import GerenciarFicha from "./gerenciarFicha";
import { fetchPersonagens } from "../utils/crudPersonagens";

export default function Pagina() {
  const [personagens, setPersonagens] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPersonagens = async () => {
      try {
        const data = await fetchPersonagens();
        setPersonagens(data); // Update state with fetched data
      } catch (error) {
        console.log(error);
        setError("Error fetching personagens");
        setPersonagens([]); // Return empty list in case of error
      }
    };

    loadPersonagens();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (error) {
    return <div>{error}</div>;
  }

  //console.log("Personagens carregados:", personagens);

  return <GerenciarFicha personagens={personagens} />;
}
