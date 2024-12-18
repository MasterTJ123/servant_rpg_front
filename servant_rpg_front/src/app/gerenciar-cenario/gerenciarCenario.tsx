"use client";

import { useState } from "react";
import "./gerenciarCenario.css";

interface Cenario {
  nome: string;
  campanha: string;
  inimigosAtuais: string[]; // Array with character names
}

interface CenariosProps {
  cenarios: Cenario[];
}

export default function GerenciarCenario({ cenarios }: CenariosProps) {
  const [selectedCenario, setSelectedCenario] = useState<Cenario | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newCenario, setNewCenario] = useState<Cenario>({
    nome: "",
    campanha: "",
    inimigosAtuais: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Novo cenário") {
      setSelectedCenario(null);
      setIsEditing(true);
      setNewCenario({ nome: "", campanha: "", inimigosAtuais: [] });
    } else {
      const cenario = cenarios.find(
        (cenario) => cenario.nome === selectedValue
      );
      setSelectedCenario(cenario || null);
      setIsEditing(false);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (selectedCenario) {
      setSelectedCenario({ ...selectedCenario, [name]: value });
    } else {
      setNewCenario({ ...newCenario, [name]: value });
    }
  };

  const saveCenario = () => {
    if (selectedCenario) {
      // Logic to update the existing scenario
      console.log("Updated scenario:", selectedCenario);
    } else {
      // Logic to create a new scenario
      console.log("Created new scenario:", newCenario);
    }
    setIsEditing(false);
  };

  const startEditing = () => setIsEditing(true);

  return (
    <div>
      <div className="sidebar">
        <a className="botao-voltar" type="button" href="/menu-principal">
          Voltar
        </a>
      </div>
      <div className="mainScreen">
        <select className="seletor-cenario" onChange={handleChange}>
          <option value="">Selecione um cenário</option>
          <option value="Novo cenário">Novo cenário</option>
          {cenarios.map((cenario) => (
            <option key={cenario.nome} value={cenario.nome}>
              {cenario.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="conteudo-ficha">
        {isEditing ? (
          <div className="linha-campos">
            <div className="campo">
              <label>Nome</label>
              <input
                name="nome"
                value={selectedCenario?.nome || newCenario.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="campo">
              <label>Campanha</label>
              <input
                name="campanha"
                value={selectedCenario?.campanha || newCenario.campanha}
                onChange={handleInputChange}
              />
            </div>
            <div className="campo">
              <label>Jogadores</label>
              <textarea
                name="inimigosAtuais"
                value={
                  selectedCenario
                    ? selectedCenario.inimigosAtuais.join(", ")
                    : newCenario.inimigosAtuais.join(", ")
                }
                onChange={(e) =>
                  selectedCenario
                    ? setSelectedCenario({
                        ...selectedCenario,
                        inimigosAtuais: e.target.value.split(","),
                      })
                    : setNewCenario({
                        ...newCenario,
                        inimigosAtuais: e.target.value.split(","),
                      })
                }
              />
            </div>
            <div className="footer-ficha">
              <button
                className="botao-salvar"
                type="button"
                onClick={saveCenario}
              >
                Salvar
              </button>
            </div>
          </div>
        ) : selectedCenario ? (
          <>
            <div className="linha-campos">
              <div className="campo">
                <label>Nome</label>
                <p>{selectedCenario.nome}</p>
              </div>
              <div className="campo">
                <label>Campanha</label>
                <p>{selectedCenario.campanha}</p>
              </div>
              <div>
                <label>Inimigos</label>
                {selectedCenario.inimigosAtuais.map((ficha) => (
                  <p key={ficha}>{ficha}</p>
                ))}
              </div>
            </div>
            <div className="footer-ficha">
              <button
                className="botao-editar"
                type="button"
                onClick={startEditing}
              >
                Editar
              </button>
              <button
                className="botao-deletar"
                type="button"
                onClick={() =>
                  console.log("Deletado cenário:", selectedCenario.nome)
                }
              >
                Deletar
              </button>
            </div>
          </>
        ) : (
          <p>Selecione um cenário para visualizar os detalhes.</p>
        )}
      </div>
    </div>
  );
}
