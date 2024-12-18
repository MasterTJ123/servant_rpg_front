"use server";
import GerenciarFicha from "./gerenciarFicha";
import { fetchPersonagens } from "./../utils/fetchPersonagens";

export default async function Pagina() {
  const personagens = await fetchPersonagens(); // Make sure to implement this function to fetch the data

  return <GerenciarFicha personagens={personagens} />;
}
