"use client";
import "./cadastrar-usuario.css";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo";
import {useState} from "react";
import BotaoRedondoSubmit from "../components/botaoRedondoSubmit/botaoRedondoSubmit";

export default function CadastroUsuario() {
    const [formData, setFormData] = useState({
        primeiroNome: "",
        ultimoNome: "",
        usuario: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [erro, setErro] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Erro: As senhas devem coincidir
        if (formData.senha !== formData.confirmarSenha) {
            setErro("Erro! As senhas não coincidem!");
            return;
        }

        setErro("");

        try {
            const response = await fetch(
                "http://localhost:8000/en/api/users/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: formData.primeiroNome,
                        last_name: formData.ultimoNome,
                        username: formData.usuario,
                        email: formData.email,
                        password: formData.senha
                    }),
                    credentials: "include",
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                const firstKey = Object.keys(errorData)[0];
                const errorMessage = errorData[firstKey]?.[0];
                setErro(errorMessage);
                return;
            }

            const data = await response.json();
            console.log(data);

            window.location.href = "/login";
        } catch (error) {
            console.error(error);
            setErro("Erro inesperado! Tente novamente mais tarde!");
        }
    };
    return (
        <div>
            <div className="background-img"></div>
            <div className="menu">
                <BotaoRedondo url={"/login"} texto={"Voltar"}></BotaoRedondo>
                <form>
                    <div className="cadastro-div">
                        <h3 className="cadastro">Cadastrar-se</h3>
                        {erro && <div className="erro">{erro}</div>}
                    </div>
                    <label className="label">Primeiro nome:</label>
                    <input
                        id="primeiroNome"
                        name="primeiroNome"
                        onChange={handleInputChange}
                        value={formData.primeiroNome}
                        type="text"
                        placeholder="Primeiro nome"
                    />
                    <label className="label">Último nome:</label>
                    <input
                        id="ultimoNome"
                        name="ultimoNome"
                        onChange={handleInputChange}
                        value={formData.ultimoNome}
                        type="text"
                        placeholder="Último nome"
                    />
                    <label className="label">Usuário:</label>
                    <input
                        id="usuario"
                        name="usuario"
                        onChange={handleInputChange}
                        value={formData.usuario}
                        type="text"
                        placeholder="Usuário"
                    />
                    <label className="label">E-mail:</label>
                    <input
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        type="email"
                        placeholder="E-mail"
                    />
                    <label className="label">Senha:</label>
                    <input
                        id="senha"
                        name="senha"
                        onChange={handleInputChange}
                        value={formData.senha}
                        type="password"
                        placeholder="Senha"
                    />
                    <label className="label">Confirmar senha:</label>
                    <input
                        id="confirmarSenha"
                        name="confirmarSenha"
                        onChange={handleInputChange}
                        value={formData.confirmarSenha}
                        type="password"
                        placeholder="Confirmar senha"
                    />
                </form>
                <BotaoRedondoSubmit handleSubmit={handleSubmit} texto={"Cadastrar"}></BotaoRedondoSubmit>
            </div>
        </div>
    );
}
