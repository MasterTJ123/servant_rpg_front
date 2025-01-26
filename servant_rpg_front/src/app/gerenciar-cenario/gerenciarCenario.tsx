"use client";

import { useEffect, useState } from "react";
import "./gerenciarCenario.css";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo"; // Ajuste o caminho conforme necessário
import {
  Cenario,
  deleteCenario,
  editCenario,
  fetchCenarios,
  sendCenario,
} from "../utils/crudCenarios";

export default function GerenciarCenario() {
  const [selectedCenario, setSelectedCenario] = useState<Cenario | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newCenario, setNewCenario] = useState<Cenario>({
    id: -1,
    name: "",
    families: "",
    characteristics: "",
  });
  const [cenarios, setCenarios] = useState([]);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const loadCenarios = async () => {
      try {
        const data = await fetchCenarios();
        setCenarios(data); // Update state with fetched data
      } catch (error) {
        console.log(error);
        setError("Error fetching personagens");
        setCenarios([]); // Return empty list in case of error
      }
    };

    loadCenarios();
  }, [refreshKey]); // Empty dependency array ensures this runs once on component mount

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Novo cenário") {
      setSelectedCenario(null);
      setIsEditing(true);
      setNewCenario({ id: -1, name: "", families: "", characteristics: "" });
    } else {
      const cenario = cenarios.find(
        (cenario) => cenario.name === selectedValue
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

  const saveCenario = async () => {
    try {
      if (selectedCenario) {
        // Update the existing scenario
        await editCenario(selectedCenario, selectedCenario.id);

        console.log("Updated scenario:", selectedCenario);
      } else {
        // Create a new scenario
        await sendCenario(newCenario);
        console.log("Created new scenario:", newCenario);
      }
      setIsEditing(false); // Exit editing mode after saving
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("Failed to save scenario:", error);
    }
  };

  const deletarCenario = async () => {
    try {
      await deleteCenario(selectedCenario.id);
      console.log("Deletado scenario:", selectedCenario);
    } catch (error) {
      console.log("Erro ao deletar cenario:", error);
    }
    setIsEditing(false); // Exit editing mode after saving
    setRefreshKey((prevKey) => prevKey + 1);
    setSelectedCenario(null);
  };

  const startEditing = () => setIsEditing(true);

  return (
    <div>
      <div className="sidebar">
        {/* Botão redondo colocado atrás do texto "Voltar" */}
        <BotaoRedondo url="/menu-principal" texto="Voltar" />
        <a className="botao-voltar" type="button" href="/menu-principal"></a>
      </div>
      <div className="display">
        <div className="mainScreen">
          <select className="seletor-cenario" onChange={handleChange}>
            <option value="">Selecione um cenário</option>
            <option value="Novo cenário">Novo cenário</option>
            {cenarios.map((cenario) => (
              <option key={cenario.id} value={cenario.name}>
                {cenario.name}
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
                  name="name"
                  value={selectedCenario?.name || newCenario.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="campo">
                <label>Familias</label>
                <textarea
                  name="families"
                  value={selectedCenario?.families || newCenario.families}
                  onChange={handleInputChange}
                />
              </div>
              <div className="campo">
                <label>Caracteristicas</label>
                <textarea
                  name="characteristics"
                  value={
                    selectedCenario
                      ? selectedCenario.characteristics
                      : newCenario.characteristics
                  }
                  onChange={handleInputChange}
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
                  <div>{selectedCenario.name}</div>
                </div>
                <div className="campo">
                  <label>Familia</label>
                  <div>{selectedCenario.families}</div>
                </div>
                <div>
                  <label>Caracteristicas</label>
                  <div>{selectedCenario.characteristics}</div>
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
                  onClick={() => deletarCenario()}
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
    </div>
  );
}
