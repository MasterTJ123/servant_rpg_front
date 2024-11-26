"use client"
import "./cadastrar-usuario.css";
import BotaoRedondo from "@/app/components/botaoRedondo/botaoRedondo";
import {useState} from "react";
import BotaoRedondoSubmit from "@/app/components/botaoRedondoSubmit/botaoRedondoSubmit";

export default function CadastroUsuario() {
    const [formData, setFormData] = useState({
        email: '',
        nome: '',
        senha: '',
        confirmarSenha: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const [erro, setErro] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Erro: As senhas devem coincidir
        if (formData.senha !== formData.confirmarSenha) {
            setErro('Erro! As senhas não coincidem!')
            return
        }

        setErro('')

        try {
            const response = await fetch('http://localhost:8000/servant_rpg_back/cadastrarusuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    nome: formData.nome,
                    senha: formData.senha
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                setErro(errorData["erro"]);
                return;
            }

            const data = await response.json()
            console.log(data)

            window.location.href = '/login'
        } catch (error) {
            console.error(error)
            setErro('Erro inesperado! Tente novamente mais tarde!')
        }
    }
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
                    <input id="email"
                           name="email"
                           onChange={handleInputChange}
                           value={formData.email}
                           type="email"
                           placeholder="E-mail"/>
                    <input id="nome"
                           name="nome"
                           onChange={handleInputChange}
                           value={formData.nome}
                           type="text"
                           placeholder="Nome"/>
                    <input id="senha"
                           name="senha"
                           onChange={handleInputChange}
                           value={formData.senha}
                           type="password"
                           placeholder="Senha"/>
                    <input id="confirmarSenha"
                           name="confirmarSenha"
                           onChange={handleInputChange}
                           value={formData.confirmarSenha}
                           type="password"
                           placeholder="Confirmar senha"/>
                </form>
                <BotaoRedondoSubmit handleSubmit={handleSubmit} texto={"Cadastrar"}></BotaoRedondoSubmit>
            </div>
        </div>
    );
}
