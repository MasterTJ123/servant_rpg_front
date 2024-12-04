"use client";
import { FormEvent } from "react";
import "./criarficha.css";
import React from "react";

export default function PaginaEditarPersonagem(): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    console.log("Form values:", formValues);
    //Está pegando os valores do campo sem nenhum filtro, em um objeto
    //da pra só converter em JSON e mandar pro banco
  };

  //TODO Filtrar e determinar o tipo dos dados que podem ser colocados em cada campo

  return (
    <div className="pagina-editar-personagem">
      <a className="botao-voltar" href="/gerenciar-ficha">
        Voltar
      </a>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" className="input-campo" />
        </div>
        <div className="campo">
          <label htmlFor="nivel">Nível</label>
          <input
            type="number"
            id="nivel"
            name="nivel"
            className="input-campo"
          />
        </div>
        <div className="campo">
          <label htmlFor="classe">Classe</label>
          <input
            type="text"
            id="classe"
            name="classe"
            className="input-campo"
          />
        </div>
        <div className="campo">
          <label htmlFor="familia">Família</label>
          <input
            type="text"
            id="familia"
            name="familia"
            className="input-campo"
          />
        </div>
        <div className="campo">
          <label htmlFor="vida">Vida</label>
          <input type="number" id="vida" name="vida" className="input-campo" />
        </div>
        <div className="campo">
          <label htmlFor="ac">AC</label>
          <input type="number" id="ac" name="ac" className="input-campo" />
        </div>
        <div className="campo">
          <label htmlFor="iniciativa">Iniciativa</label>
          <input
            type="text"
            id="iniciativa"
            name="iniciativa"
            className="input-campo"
          />
        </div>
        <div className="campo">
          <label htmlFor="tamanho">Tamanho</label>
          <input
            type="text"
            id="tamanho"
            name="tamanho"
            className="input-campo"
          />
        </div>
        <div className="campo">
          <label htmlFor="spellSlots">Spell Slots</label>
          <input
            type="number"
            id="spellSlots"
            name="spellSlots"
            className="input-campo"
          />
        </div>
        <div className="campo">
          <label htmlFor="profA">Prof A</label>
          <input type="text" id="profA" name="profA" className="input-campo" />
        </div>
        <div className="campo">
          <label htmlFor="profM">Prof M</label>
          <input type="text" id="profM" name="profM" className="input-campo" />
        </div>
        <div className="campo">
          <label htmlFor="caracteristicas">Características</label>
          <textarea
            id="caracteristicas"
            name="caracteristicas"
            className="input-campo textarea-campo"
          ></textarea>
        </div>
        <div className="campo">
          <label htmlFor="profD">Prof D</label>
          <input type="text" id="profD" name="profD" className="input-campo" />
        </div>
        <div className="footer-formulario">
          <label className="checkbox-jogador">
            <input type="checkbox" name="jogador" />
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
