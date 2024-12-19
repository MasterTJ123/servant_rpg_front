"use client";
import { useState } from "react";
import "./gerenciarGrupo.css";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo"; // Ajuste o caminho conforme necessário

interface Grupo {
  nome: string;
  campanha: string;
  fichasAtuais: string[]; // Array com os nomes dos jogadores
}

interface GruposProps {
  grupos: Grupo[];
}

export default function GerenciarGrupo({ grupos }: GruposProps) {
  const [selectedGrupo, setSelectedGrupo] = useState<Grupo | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newGrupo, setNewGrupo] = useState<Grupo>({
    nome: "",
    campanha: "",
    fichasAtuais: [],
  });
  const [erro, setErro] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setErro("");

    if (selectedValue === "Novo grupo") {
      setSelectedGrupo(null);
      setIsEditing(true);
      setNewGrupo({ nome: "", campanha: "", fichasAtuais: [] });
    } else {
      const grupo = grupos.find((grupo) => grupo.nome === selectedValue);
      setSelectedGrupo(grupo || null);
      setIsEditing(false);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const updateGrupo = (grupo: Grupo) => ({ ...grupo, [name]: value });

    selectedGrupo
      ? setSelectedGrupo(updateGrupo(selectedGrupo))
      : setNewGrupo(updateGrupo(newGrupo));
  };

  const saveGrupo = async (e: React.FormEvent) => {
    e.preventDefault();
    const grupo = selectedGrupo || newGrupo;

    try {
      const method = selectedGrupo ? "PUT" : "POST";
      const response = await fetch("http://localhost:8000/en/api/grupo/", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(grupo),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        const firstKey = Object.keys(errorData)[0];
        setErro(errorData[firstKey]?.[0]);
        return;
      }

      const data = await response.json();
      console.log(`${selectedGrupo ? "Grupo editado" : "Grupo criado"}:`, data);
    } catch (error) {
      console.error(error);
      setErro("Erro inesperado! Tente novamente mais tarde!");
    } finally {
      setIsEditing(false);
    }
  };

  const startEditing = () => setIsEditing(true);

  return (
    <div>
      <div className="sidebar">
        <BotaoRedondo url="/menu-principal" texto="Voltar" />
      </div>
      <div className="mainScreen">
        <select className="seletor-grupo" onChange={handleChange}>
          <option value="">Selecione um grupo</option>
          <option value="Novo grupo">Novo grupo</option>
          {grupos.map((grupo) => (
            <option key={grupo.nome} value={grupo.nome}>
              {grupo.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="conteudo-ficha">
        {isEditing ? (
          <form onSubmit={saveGrupo}>
            <div className="linha-campos">
              <div className="campo">
                <label>Nome</label>
                <input
                  name="nome"
                  value={selectedGrupo?.nome || newGrupo.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="campo">
                <label>Campanha</label>
                <input
                  name="campanha"
                  value={selectedGrupo?.campanha || newGrupo.campanha}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="campo">
                <label>Jogadores</label>
                <textarea
                  name="fichasAtuais"
                  rows={5}
                  cols={40}
                  placeholder="Insira os nomes separados por vírgulas"
                  value={(
                    selectedGrupo?.fichasAtuais || newGrupo.fichasAtuais
                  ).join(", ")}
                  onChange={(e) =>
                    selectedGrupo
                      ? setSelectedGrupo({
                          ...selectedGrupo,
                          fichasAtuais: e.target.value
                            .split(",")
                            .map((item) => item.trim()),
                        })
                      : setNewGrupo({
                          ...newGrupo,
                          fichasAtuais: e.target.value
                            .split(",")
                            .map((item) => item.trim()),
                        })
                  }
                />
              </div>
            </div>
            <div className="footer-ficha">
              <button className="botao-salvar" type="submit">
                Salvar
              </button>
            </div>
          </form>
        ) : selectedGrupo ? (
          <>
            <div className="linha-campos">
              <div className="campo">
                <label>Nome</label>
                <div>{selectedGrupo.nome}</div>
              </div>
              <div className="campo">
                <label>Campanha</label>
                <div>{selectedGrupo.campanha}</div>
              </div>
              <div className="campo">
                <label>Jogadores</label>
                {selectedGrupo.fichasAtuais.map((ficha) => (
                  <div key={ficha}>{ficha}</div>
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
                  console.log("Deletado grupo:", selectedGrupo.nome)
                }
              >
                Deletar
              </button>
            </div>
          </>
        ) : (
          <p>Selecione um grupo para visualizar os detalhes.</p>
        )}
      </div>
    </div>
  );
}
