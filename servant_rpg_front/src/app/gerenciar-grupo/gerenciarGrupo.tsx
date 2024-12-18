"use cliente";
import "./gerenciarGrupo.css";

interface Grupo {
  nome: string;
  campanha: string;
  fichasAtuais: string[]; //por enquanto, fazer só um array só com o nome dos personagens
}

//vai ter que ter uma forma de selecionar o grupo para exibir
interface GruposProps {
  grupos: Grupo[];
}
export default function GerenciarGrupo({ grupos }: GruposProps) {
  return (
    <div>
      <div className="sidebar">
        <a
          className="botao-criar"
          type="button"
          href="/gerenciar-ficha/criar-ficha"
        >
          Criar
        </a>
        <a className="botao-voltar" type="button" href="/menu-principal">
          Voltar
        </a>
      </div>
    </div>
  );
}
