//Como vou editar essas fichas?
"use client";
import React, { FormEvent, useEffect } from "react";
import { useState } from "react";
import {
  editPersonagem,
  fecthSinglePersonagem,
  Personagem,
} from "../../../utils/crudPersonagens";
import "./editarficha.css";
import { useRouter } from "next/navigation";

interface idFicha {
  id: number;
}
export default function EditarFicha({ params }: { params: Promise<idFicha> }) {
  const idFicha: number = React.use(params).id; //pra que essa chatisse toda, React?
  const [personagem, setPersonagem] = useState<Personagem | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    nivel: "",
    classe: "",
    familia: "",
    vida: "",
    ac: "",
    iniciativa: "",
    tamanho: "",
    spellSlots: "",
    profA: "",
    profM: "",
    caracteristicas: "",
    jogador: false,
  });

  const router = useRouter();

  useEffect(() => {
    async function fecthPersonagem() {
      const ficha = await fecthSinglePersonagem(idFicha);
      console.log(ficha);
      setPersonagem(ficha);
    }

    fecthPersonagem();
  }, []);

  //  Effect hook to handle side effects or async tasks after form data is set
  useEffect(() => {
    // Here, if you need to do something after form data is updated, you can add logic
  }, [formData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Convert FormData to a plain object
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    // Send the data to the backend
    try {
      const datainjson = JSON.stringify(formValues);
      console.log("Form values:", datainjson);

      const enviado = await editPersonagem(formData, idFicha); // Send the form values to backend
      //console.log(enviado);
      router.push("/gerenciar-ficha");
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };

  useEffect(() => {
    if (personagem) {
      setFormData({
        nome: personagem.name,
        nivel: "" + personagem.level,
        classe: personagem.choosen_class,
        familia: personagem.family,
        vida: "" + personagem.life,
        ac: "" + personagem.armor,
        iniciativa: "" + personagem.initiative,
        tamanho: "" + personagem.size,
        spellSlots: "" + personagem.spell_slots,
        profA: "" + personagem.weapon_proficiency,
        profM: "" + personagem.magic_proficiency,
        caracteristicas: personagem.traits,
        jogador: personagem.include_generative,
      });
    }
  }, [personagem]); // Only run this effect when `personagem` changes

  if (!personagem) {
    return <h1>Nenhum personagem selecionado</h1>;
  } else {
    //TODO transformar isso em um componente
    return (
      <div className="pagina-editar-personagem">
        <a className="botao-voltar" href="/gerenciar-ficha">
          Voltar
        </a>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="input-campo"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="nivel">Nível</label>
            <input
              type="number"
              id="nivel"
              name="nivel"
              className="input-campo"
              value={formData.nivel}
              onChange={(e) =>
                setFormData({ ...formData, nivel: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="classe">Classe</label>
            <input
              type="text"
              id="classe"
              name="classe"
              className="input-campo"
              value={formData.classe}
              onChange={(e) =>
                setFormData({ ...formData, classe: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="familia">Família</label>
            <input
              type="text"
              id="familia"
              name="familia"
              className="input-campo"
              value={formData.familia}
              onChange={(e) =>
                setFormData({ ...formData, familia: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="vida">Vida</label>
            <input
              type="number"
              id="vida"
              name="vida"
              className="input-campo"
              value={formData.vida}
              onChange={(e) =>
                setFormData({ ...formData, vida: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="ac">AC</label>
            <input
              type="number"
              id="ac"
              name="ac"
              className="input-campo"
              value={formData.ac}
              onChange={(e) => setFormData({ ...formData, ac: e.target.value })}
            />
          </div>
          <div className="campo">
            <label htmlFor="iniciativa">Iniciativa</label>
            <input
              type="text"
              id="iniciativa"
              name="iniciativa"
              className="input-campo"
              value={formData.iniciativa}
              onChange={(e) =>
                setFormData({ ...formData, iniciativa: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="tamanho">Tamanho</label>
            <input
              type="text"
              id="tamanho"
              name="tamanho"
              className="input-campo"
              value={formData.tamanho}
              onChange={(e) =>
                setFormData({ ...formData, tamanho: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="spellSlots">Spell Slots</label>
            <input
              type="number"
              id="spellSlots"
              name="spellSlots"
              className="input-campo"
              value={formData.spellSlots}
              onChange={(e) =>
                setFormData({ ...formData, spellSlots: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="profA">Prof A</label>
            <input
              type="text"
              id="profA"
              name="profA"
              className="input-campo"
              value={formData.profA}
              onChange={(e) =>
                setFormData({ ...formData, profA: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="profM">Prof M</label>
            <input
              type="text"
              id="profM"
              name="profM"
              className="input-campo"
              value={formData.profM}
              onChange={(e) =>
                setFormData({ ...formData, profM: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="caracteristicas">Características</label>
            <textarea
              id="caracteristicas"
              name="caracteristicas"
              className="input-campo textarea-campo"
              value={formData.caracteristicas}
              onChange={(e) =>
                setFormData({ ...formData, caracteristicas: e.target.value })
              }
            ></textarea>
          </div>

          <div className="footer-formulario">
            <label className="checkbox-jogador">
              <input
                type="checkbox"
                name="jogador"
                checked={formData.jogador}
                onChange={(e) =>
                  setFormData({ ...formData, jogador: e.target.checked })
                }
              />
              Jogador
            </label>
            <button className="botao-salvar" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
