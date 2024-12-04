// This would be in your parent server-side page (for example, `page.tsx`)

import GerenciarFicha from "./gerenciarFicha";
import { fetchPersonagens } from "./../utils/fetchPersonagens";

export default async function Pagina() {
  const personagens = await fetchPersonagens(); // Make sure to implement this function to fetch the data

  return <GerenciarFicha personagens={personagens} />;
}
