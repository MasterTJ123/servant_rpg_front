"use client"
import "./login.css"
import BotaoRedondo from "@/app/components/botaoRedondo/botaoRedondo";
import {useState} from "react";
import BotaoRedondoSubmit from "@/app/components/botaoRedondoSubmit/botaoRedondoSubmit";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
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

        setErro('')

        try {
            const response = await fetch('http://localhost:8000/servant_rpg_back/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
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

            // TODO: Salvar token/dados do usuário e redirecionar

            // Essa parte (de salvar o token) é opcional por que daria muito mais trabalho
            // e até esse momento a gente não tem nenhuma validação de token
            // sendo feita pelo front-end


            // localStorage.setItem('token', data.token)

            window.location.href = '/menu-principal'
        } catch (error) {
            console.error(error)
            setErro('Erro inesperado! Tente novamente mais tarde!')
        }
    }
    return (
        <div>
            <div className='background-img'></div>
            <div className='menu'>
                <BotaoRedondo url={"/cadastrar-usuario"} texto={"Cadastrar"}></BotaoRedondo>
                <form>
                    <div className="login-div">
                        <h3 className='login'>Login</h3>
                        {erro && <div className="erro">{erro}</div>}
                    </div>
                    <input id="email"
                           name="email"
                           onChange={handleInputChange}
                           value={formData.email}
                           type="email"
                           placeholder='Email'/>
                    <input id="senha"
                           name="senha"
                           onChange={handleInputChange}
                           value={formData.senha}
                           type="password"
                           placeholder='Senha'/>
                </form>
                <BotaoRedondoSubmit handleSubmit={handleSubmit} texto={"Entrar"}></BotaoRedondoSubmit>
            </div>
        </div>
    );
}
