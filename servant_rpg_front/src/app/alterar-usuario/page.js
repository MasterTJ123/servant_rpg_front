import "./alterar-usuario.css";

export default function PaginaDeletarConta() {
    return (
        <div className="pagina-deletar-conta">
            <form className="formulario">
                <h2>Deletar Conta</h2>
                <input type="text" placeholder="Login"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmação de senha"/>
                <button className="botao-deletar" type="button">Deletar conta</button>
            </form>
        </div>
    );
}
