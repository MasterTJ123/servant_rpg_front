"use client";
import { useState } from "react";
import "./gerenciarGrupo.css";

interface Grupo {
  nome: string;
  campanha: string;
  fichasAtuais: string[]; // Array with character names
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
  const [erro, setErro] = useState<string>();

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
    if (selectedGrupo) {
      setSelectedGrupo({ ...selectedGrupo, [name]: value });
    } else {
      setNewGrupo({ ...newGrupo, [name]: value });
    }
  };

  const saveGrupo = async (e) => {
    e.preventDefault();

    if (selectedGrupo) {
      // TODO Adicionar aqui a função para editar o grupo no banco
      console.log("Updated group:", selectedGrupo);
    } else {
      // ele vai atualizar de cara, ou precisa dar um refresh na página? Pq está vindo da pagina anterior
      try {
        const response = await fetch("http://localhost:8000/en/api/grupo/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: newGrupo.nome,
            campanha: newGrupo.campanha,
            fichasAtuais: newGrupo.fichasAtuais,
          }),
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          const firstKey = Object.keys(errorData)[0];
          const errorMessage = errorData[firstKey]?.[0];
          setErro(errorMessage);
          return;
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
        setErro("Erro inesperado! Tente novamente mais tarde!");
      }
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
          <div className="linha-campos">
            <div className="campo">
              <label>Nome</label>
              <input
                name="nome"
                value={selectedGrupo?.nome || newGrupo.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="campo">
              <label>Campanha</label>
              <input
                name="campanha"
                value={selectedGrupo?.campanha || newGrupo.campanha}
                onChange={handleInputChange}
              />
            </div>
            <div className="campo">
              <label>Jogadores</label>
              <textarea
                name="fichasAtuais"
                value={
                  selectedGrupo
                    ? selectedGrupo.fichasAtuais.join(", ")
                    : newGrupo.fichasAtuais.join(", ")
                }
                onChange={(e) =>
                  selectedGrupo
                    ? setSelectedGrupo({
                        ...selectedGrupo,
                        fichasAtuais: e.target.value.split(","),
                      })
                    : setNewGrupo({
                        ...newGrupo,
                        fichasAtuais: e.target.value.split(","),
                      })
                }
              />
            </div>
            <div className="footer-ficha">
              <button
                className="botao-salvar"
                type="button"
                onClick={saveGrupo}
              >
                Salvar
              </button>
            </div>
          </div>
        ) : selectedGrupo ? (
          <>
            <div className="linha-campos">
              <div className="campo">
                <label>Nome</label>
                <p>{selectedGrupo.nome}</p>
              </div>
              <div className="campo">
                <label>Campanha</label>
                <p>{selectedGrupo.campanha}</p>
              </div>
              <div>
                <label>Jogadores</label>
                {selectedGrupo.fichasAtuais.map((ficha) => (
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
