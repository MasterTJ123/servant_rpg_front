import "./cadastrar-usuario.css";
import BotaoRedondo from "@/app/components/botaoRedondo/botaoRedondo";

export default function CadastroUsuario() {
    return (
        <div>
            <div className="background-img"></div>
            <div className="menu">
                <BotaoRedondo url={"/login"} texto={"Voltar"}></BotaoRedondo>
                <form>
                    <h3 className="cadastro">Cadastrar-se</h3>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar senha"/>
                </form>
                <BotaoRedondo url={"/login"} texto={"Cadastrar"}></BotaoRedondo>
            </div>
        </div>
    );
}
