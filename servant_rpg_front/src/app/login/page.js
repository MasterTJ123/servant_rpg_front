import "./login.css"
import BotaoRedondo from "@/app/components/botaoRedondo/botaoRedondo";

export default function Login() {
    return (
        <div>
            <div className='background-img'></div>
            <div className='menu'>
                <BotaoRedondo url={"/cadastrar-usuario"} texto={"Cadastrar"}></BotaoRedondo>
                <form>
                    <h3 className='login'>Login</h3>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Senha'/>
                </form>
                <BotaoRedondo url={"/menu-principal"} texto={"Entrar"}></BotaoRedondo>
            </div>
        </div>
    );
}
