import "./conta.css";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo";

export default function Conta() {
  return (
    <div>
      <div className="background-img"></div>
      <div className="menu">
        <BotaoRedondo url={"/menu-principal"} texto={"Voltar"}></BotaoRedondo>
        <form>
          <h3 className="cadastro">Alterar conta</h3>
          <input type="password" placeholder="Senha antiga" />
          <input type="password" placeholder="Nova senha" />
        </form>
        <BotaoRedondo url={"/menu-principal"} texto={"Alterar"}></BotaoRedondo>

        <button className="deletar">Deletar</button>
      </div>
    </div>
  );
}
