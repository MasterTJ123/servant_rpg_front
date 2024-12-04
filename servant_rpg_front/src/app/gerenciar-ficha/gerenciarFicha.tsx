"use client"; // This will ensure it is client-side rendered
import { useState, useEffect } from "react";
import "./gerenciarFicha.css";

interface Personagem {
  nome: string;
  nivel: number;
  classe: string;
  familia: string;
  vida: number;
  ac: number;
  iniciativa: string;
  tamanho: string;
  spellSlots: number;
  profA: string;
  profM: string;
  profD: string;
  caracteristicas: string;
  jogador: boolean;
}

interface PaginaMostrarPersonagemProps {
  personagens: Personagem[];
}

export default function GerenciarFicha({
  personagens,
}: PaginaMostrarPersonagemProps) {
  const [selectedPersonagem, setSelectedPersonagem] =
    useState<Personagem | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPersonagem = personagens.find(
      (personagem) => personagem.nome === event.target.value
    );
    setSelectedPersonagem(selectedPersonagem || null);
  };

  return (
    <div className="pagina-mostrar-personagem">
      <div className="sidebar">
        <select className="seletor-personagem" onChange={handleChange}>
          <option value="">Selecione um personagem</option>
          {personagens.map((personagem) => (
            <option key={personagem.nome} value={personagem.nome}>
              {personagem.nome}
            </option>
          ))}
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
        {selectedPersonagem ? (
          <>
            <div className="linha-campos">
              <div className="campo">
                <label>Nome</label>
                <p>{selectedPersonagem.nome}</p>
              </div>
              <div className="campo">
                <label>Nível</label>
                <p>{selectedPersonagem.nivel}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Classe</label>
                <p>{selectedPersonagem.classe}</p>
              </div>
              <div className="campo">
                <label>Família</label>
                <p>{selectedPersonagem.familia}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Vida</label>
                <p>{selectedPersonagem.vida}</p>
              </div>
              <div className="campo">
                <label>AC</label>
                <p>{selectedPersonagem.ac}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Iniciativa</label>
                <p>{selectedPersonagem.iniciativa}</p>
              </div>
              <div className="campo">
                <label>Tamanho</label>
                <p>{selectedPersonagem.tamanho}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Spell Slots</label>
                <p>{selectedPersonagem.spellSlots}</p>
              </div>
              <div className="campo">
                <label>Prof A</label>
                <p>{selectedPersonagem.profA}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Prof M</label>
                <p>{selectedPersonagem.profM}</p>
              </div>
              <div className="campo">
                <label>Prof D</label>
                <p>{selectedPersonagem.profD}</p>
              </div>
            </div>
            <div className="linha-campo-unico">
              <div className="campo">
                <label>Características</label>
                <p>{selectedPersonagem.caracteristicas}</p>
              </div>
            </div>
            <div className="footer-ficha">
              <label className="checkbox-jogador">
                <input
                  type="checkbox"
                  checked={selectedPersonagem.jogador}
                  readOnly
                />
                Jogador
              </label>
              <button className="botao-deletar" type="button">
                Deletar
              </button>
            </div>
          </>
        ) : (
          <p>Selecione um personagem para visualizar os detalhes.</p>
        )}
      </div>
    </div>
  );
}
