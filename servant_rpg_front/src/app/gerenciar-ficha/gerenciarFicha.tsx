"use client"; // This will ensure it is client-side rendered
import { useState, useEffect } from "react";
import "./gerenciarFicha.css";
import { deletePersonagem } from "../utils/crudPersonagens";

interface Personagem {
  id: number;
  name: string;
  level: number;
  choosen_class: string;
  family: string;
  life: number;
  armor: number;
  initiative: number;
  spell_slots: string; // Keeping it as string since the backend returns it this way
  weapon_proficiency: number;
  magic_proficiency: number;
  size: number;
  traits: string;
  include_generative: boolean;
  user: number; // Assuming this refers to the user ID
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
      (personagem) => personagem.name === event.target.value
    );
    setSelectedPersonagem(selectedPersonagem || null);
  };

  const handleDeleteCharacter = async (id: number) => {
    console.log("Deletando:", selectedPersonagem);
    deletePersonagem(id);
  };

  return (
    <div className="pagina-mostrar-personagem">
      <div className="sidebar">
        <select className="seletor-personagem" onChange={handleChange}>
          <option value="">Selecione um personagem</option>
          {personagens.map((personagem) => (
            <option key={personagem.name} value={personagem.name}>
              {personagem.name}
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
                <p>{selectedPersonagem.name}</p>
              </div>
              <div className="campo">
                <label>Nível</label>
                <p>{selectedPersonagem.level}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Classe</label>
                <p>{selectedPersonagem.choosen_class}</p>
              </div>
              <div className="campo">
                <label>Família</label>
                <p>{selectedPersonagem.family}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Vida</label>
                <p>{selectedPersonagem.life}</p>
              </div>
              <div className="campo">
                <label>AC</label>
                <p>{selectedPersonagem.armor}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Iniciativa</label>
                <p>{selectedPersonagem.initiative}</p>
              </div>
              <div className="campo">
                <label>Tamanho</label>
                <p>{selectedPersonagem.size}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Spell Slots</label>
                <p>{selectedPersonagem.spell_slots}</p>
              </div>
              <div className="campo">
                <label>Prof A</label>
                <p>{selectedPersonagem.weapon_proficiency}</p>
              </div>
            </div>
            <div className="linha-campos">
              <div className="campo">
                <label>Prof M</label>
                <p>{selectedPersonagem.magic_proficiency}</p>
              </div>
            </div>
            <div className="linha-campo-unico">
              <div className="campo">
                <label>Características</label>
                <p>{selectedPersonagem.traits}</p>
              </div>
            </div>
            <div className="footer-ficha">
              <label className="checkbox-jogador">
                <input
                  type="checkbox"
                  checked={selectedPersonagem.include_generative}
                  readOnly
                />
                Jogador
              </label>
              <button
                className="botao-deletar"
                type="button"
                onClick={() => handleDeleteCharacter(selectedPersonagem.id)}
              >
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
