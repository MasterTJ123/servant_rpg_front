"use client";
import { useEffect, useState } from "react";
import "./gerenciarGrupo.css";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo"; // Ajuste o caminho conforme necessário
import { fetchPersonagens, Personagem } from "../utils/crudPersonagens";

interface Grupo {
  nome: string;
  campanha: string;
  fichasAtuais: number[]; // Array com os nomes dos jogadores
}

interface GrupoStrings {
  nome: string;
  campanha: string;
}
interface GruposProps {
  grupos: Grupo[];
  personagens: Personagem[];
}

export default function GerenciarGrupo({ grupos, personagens }: GruposProps) {
  const [selectedGrupo, setSelectedGrupo] = useState<Grupo | null>(null); //controla qual grupo foi selecionado no dropdown
  const [isEditing, setIsEditing] = useState(false); //controla se o grupo esta sendo editado
  const [newGrupo, setNewGrupo] = useState<GrupoStrings>({
    nome: "",
    campanha: "",
    //fichasAtuais: [],
  }); //Cria um estado para salvar o novo grupo
  const [erro, setErro] = useState<string>("");

  //
  //preciso de um estado para controlar qual personagem esta selecionado
  //controla se a checkbox esta selecionada ou nao
  const [selectedPersonagens, setSelectedPersonagens] = useState(
    new Array(personagens.length).fill(false)
  );

  //tabela com checkbox
  const renderPersonagens = (personagem: Personagem, index: number) => {
    return (
      <li key={index} className="personagem-disponivel">
        <input
          type="checkbox"
          id={`personagem-disponivel-${personagem.id}`}
          value={personagem.id}
          checked={selectedPersonagens[index]}
          onChange={() => handleSelectPersonagemChange(index)}
        />
        <h3 className="p-2">{personagem.name}</h3>
      </li>
    );
  };

  //Evento de selecionar os personagens da lista
  const handleSelectPersonagemChange = (position) => {
    const updatedCheckedState = selectedPersonagens.map((personagem, index) =>
      index === position ? !personagem : personagem
    );
    setSelectedPersonagens(updatedCheckedState);
    //preciso fazer mais alguma coisa aqui?
  };

  //TODO preciso mostrar em um campo quais foram selecionados

  const handleChangeGroupDropdown = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setErro("");

    if (selectedValue === "Novo grupo") {
      setSelectedGrupo(null);
      setIsEditing(true);
      setNewGrupo({ nome: "", campanha: "" });
    } else {
      const grupo = grupos.find((grupo) => grupo.nome === selectedValue);
      setSelectedGrupo(grupo || null);
      setIsEditing(false);
    }
  };

  const handleInputChangeWhenEditingGroup = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const updateGrupo = (grupo: Grupo) => ({ ...grupo, [name]: value });

    // selectedGrupo
    //   ? setSelectedGrupo(updateGrupo(selectedGrupo))
    //   : setNewGrupo(updateGrupo(newGrupo));
  };

  const saveGrupo = async (e: React.FormEvent) => {
    e.preventDefault();
    //preciso pegar as fichas selecionadas e salvar no grupo
    const infos = newGrupo;
    const selecionados = personagens.filter(
      (_, index) => selectedPersonagens[index]
    );
    const selecionadosId = selecionados.map((ficha) => ficha.id);
    //grupo.fichasAtuais = selecionadosId;
    console.log(infos);

    try {
      const method = "POST";
      const response = await fetch("http://localhost:8000/en/api/groups/", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(infos),
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
      <div className="display">
        <div className="mainScreen">
          <select
            className="seletor-grupo"
            onChange={handleChangeGroupDropdown}
          >
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
                    onChange={handleInputChangeWhenEditingGroup}
                    required
                  />
                </div>
                <div className="campo">
                  <label>Campanha</label>
                  <input
                    name="campanha"
                    value={selectedGrupo?.campanha || newGrupo.campanha}
                    onChange={handleInputChangeWhenEditingGroup}
                    required
                  />
                </div>
                <div className="lista">
                  <label>Jogadores</label>
                  <ul className="list-none">
                    {" "}
                    {personagens.map((personagem, index) =>
                      renderPersonagens(personagem, index)
                    )}
                  </ul>
                </div>

                <div className="footer-ficha">
                  <button className="botao-salvar" type="submit">
                    Salvar
                  </button>
                </div>
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
                <div className="lista-jogadores-do-grupo">
                  {selectedGrupo.fichasAtuais.map((ficha) => {
                    const personagem = personagens.find((p) => p.id === ficha);

                    return (
                      <div key={ficha}>
                        {personagem
                          ? personagem.name
                          : "Personagem não encontrado"}
                      </div>
                    );
                  })}
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
    </div>
  );
}
