import "./criarficha.css";

export default function PaginaEditarPersonagem() {
    return (
        <div className="pagina-editar-personagem">
            <button className="botao-voltar" type="button">Voltar</button>
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="nivel">Nível</label>
                    <input type="number" id="nivel" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="classe">Classe</label>
                    <input type="text" id="classe" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="familia">Família</label>
                    <input type="text" id="familia" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="vida">Vida</label>
                    <input type="number" id="vida" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="ac">AC</label>
                    <input type="number" id="ac" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="iniciativa">Iniciativa</label>
                    <input type="text" id="iniciativa" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="tamanho">Tamanho</label>
                    <input type="text" id="tamanho" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="spellSlots">Spell Slots</label>
                    <input type="number" id="spellSlots" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="profA">Prof A</label>
                    <input type="text" id="profA" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="profM">Prof M</label>
                    <input type="text" id="profM" className="input-campo"/>
                </div>
                <div className="campo">
                    <label htmlFor="caracteristicas">Características</label>
                    <textarea id="caracteristicas" className="input-campo textarea-campo"></textarea>
                </div>
                <div className="campo">
                    <label htmlFor="profD">Prof D</label>
                    <input type="text" id="profD" className="input-campo"/>
                </div>
                <div className="footer-formulario">
                    <label className="checkbox-jogador">
                        <input type="checkbox" />
                        Jogador
                    </label>
                    <button className="botao-salvar" type="button">Salvar</button>
                </div>
            </form>
        </div>
    );
}
