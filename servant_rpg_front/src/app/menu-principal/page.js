import "./menu-principal.css";
import BotaoRedondo from "@/app/components/botaoRedondo/botaoRedondo";
import logo from "../../../public/images/caveira-logo.webp";
import Image from "next/image";

export default function MenuPrincial() {
    return (
        <div className="menu-principal">
            {/* Faixa preta no topo */}
            <div className="faixa-preta"></div>
            <div className="container">
                <div className="coluna">
                    <BotaoRedondo url={"/botao1"} texto={"Gerar Encontro"}/>
                    <BotaoRedondo url={"/botao2"} texto={"Gerenciar Fichas"}/>
                    <BotaoRedondo url={"/botao3"} texto={"Relatórios"}/>
                </div>
                <div className="imagem-container">
                    <Image
                        src={logo}
                        className="imagem-centralizada"
                        alt="Logo de uma Caveira"
                    />
                </div>
                <div className="coluna">
                    <BotaoRedondo url={"/botao4"} texto={"Gerenciar Grupo"}/>
                    <BotaoRedondo url={"/botao5"} texto={"Gerenciar Cenário"}/>
                    <BotaoRedondo url={"/conta"} texto={"Conta"}/>
                    <BotaoRedondo url={"/login"} texto={"Sair"}/>
                </div>
            </div>
        </div>
    );
}
