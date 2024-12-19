import "./conta.css";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo";
import BotaoRedondoSubmit from "../components/botaoRedondoSubmit/botaoRedondoSubmit";


export default function Conta() {
    const [formData, setFormData] = useState({
        primeiroNome: "",
        ultimoNome: "",
        usuario: "",
        senha: ""
    });

    const [erro, setErro] = useState();
    const [usuarioId, setUsuarioId] = useState(null);

    const getAccessTokenFromCookie = () => {
        const cookies = document.cookie.split("; ");
        const accessTokenCookie = cookies.find((cookie) =>
            cookie.startsWith("access_token=")
        );
        return accessTokenCookie ? accessTokenCookie.split("=")[1] : null;
    };

    useEffect(() => {
        const token = getAccessTokenFromCookie();
        if (token) {
            const decoded = jwtDecode(token);
            setUsuarioId(decoded.user_id);
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!usuarioId) return;

            try {
                const response = await fetch(
                    `http://localhost:8000/en/api/users/${usuarioId}/`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        primeiroNome: data.first_name || "",
                        ultimoNome: data.last_name || "",
                        usuario: data.username || "",
                        senha: "", // Nunca preencher a senha por questões de segurança
                    });
                } else {
                    setErro("Erro ao buscar dados do usuário.");
                }
            } catch (error) {
                console.error(error);
                setErro("Erro inesperado ao buscar dados do usuário.");
            }
        };

        fetchUserData();
    }, [usuarioId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro("");

        try {
            const response = await fetch(
                `http://localhost:8000/en/api/users/${usuarioId}/`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: formData.primeiroNome,
                        last_name: formData.ultimoNome,
                        username: formData.usuario,
                        password: formData.senha,
                    }),
                    credentials: "include",
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                setErro(errorData["erro"]);
                return;
            }

            alert("Dados alterados com sucesso!");
        } catch (error) {
            console.error(error);
            setErro("Erro inesperado! Tente novamente mais tarde!");
        }
    };
    return (
        <div>
            <div className="background-img"></div>
            <div className="menu">
                <BotaoRedondo url={"/menu-principal"} texto={"Voltar"}></BotaoRedondo>
                <form>
                    <h3 className="cadastro">Alterar conta</h3>
                    <label htmlFor="primeiroNome">Primeiro nome:</label>
                    <input
                        id="primeiroNome"
                        name="primeiroNome"
                        onChange={handleInputChange}
                        value={formData.primeiroNome}
                        type="text"
                        placeholder="Primeiro nome"
                    />
                    <label htmlFor="ultimoNome">Último nome:</label>
                    <input
                        id="ultimoNome"
                        name="ultimoNome"
                        onChange={handleInputChange}
                        value={formData.ultimoNome}
                        type="text"
                        placeholder="Último nome"
                    />
                    <label htmlFor="usuario">Usuário:</label>
                    <input
                        id="usuario"
                        name="usuario"
                        onChange={handleInputChange}
                        value={formData.usuario}
                        type="text"
                        placeholder="Usuário"
                    />
                    <label htmlFor="senha">Senha:</label>
                    <input
                        id="senha"
                        name="senha"
                        onChange={handleInputChange}
                        value={formData.senha}
                        type="password"
                        placeholder="Senha"
                    />
                </form>
                <BotaoRedondoSubmit handleSubmit={handleSubmit} texto={"Alterar"}></BotaoRedondoSubmit>
            </div>
        </div>
    );
}
