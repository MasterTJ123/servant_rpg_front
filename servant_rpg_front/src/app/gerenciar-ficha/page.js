import "./gerenciarficha.css";
import { redirect } from "next/navigation";

export default function PaginaMostrarPersonagem() {
  return (
    <div className="pagina-mostrar-personagem">
      <div className="sidebar">
        <select className="seletor-personagem">
          <option value="">Selecione um personagem</option>
          <option value="personagem1">Personagem 1</option>
          <option value="personagem2">Personagem 2</option>
          <option value="personagem3">Personagem 3</option>
        </select>
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
      <div className="conteudo-ficha">
        <div className="linha-campos">
          <div className="campo">
            <label>Nome</label>
            <p>Exemplo de Nome</p>
          </div>
          <div className="campo">
            <label>Nível</label>
            <p>5</p>
          </div>
        </div>
        <div className="linha-campos">
          <div className="campo">
            <label>Classe</label>
            <p>Mago</p>
          </div>
          <div className="campo">
            <label>Família</label>
            <p>Família Exemplo</p>
          </div>
        </div>
        <div className="linha-campos">
          <div className="campo">
            <label>Vida</label>
            <p>20</p>
          </div>
          <div className="campo">
            <label>AC</label>
            <p>15</p>
          </div>
        </div>
        <div className="linha-campos">
          <div className="campo">
            <label>Iniciativa</label>
            <p>+3</p>
          </div>
          <div className="campo">
            <label>Tamanho</label>
            <p>Médio</p>
          </div>
        </div>
        <div className="linha-campos">
          <div className="campo">
            <label>Spell Slots</label>
            <p>3</p>
          </div>
          <div className="campo">
            <label>Prof A</label>
            <p>+2</p>
          </div>
        </div>
        <div className="linha-campos">
          <div className="campo">
            <label>Prof M</label>
            <p>+1</p>
          </div>
          <div className="campo">
            <label>Prof D</label>
            <p>+4</p>
          </div>
        </div>
        <div className="linha-campo-unico">
          <div className="campo">
            <label>Características</label>
            <p>Habilidade especial do personagem.</p>
          </div>
        </div>
        <div className="footer-ficha">
          <label className="checkbox-jogador">
            <input type="checkbox" />
            Jogador
          </label>
          <button className="botao-deletar" type="button">
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
