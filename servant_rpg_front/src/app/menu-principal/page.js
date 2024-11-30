import "./menu-principal.css";
import BotaoRedondo from "@/app/components/botaoRedondo/botaoRedondo";
import logo from "../../../public/images/caveira-logo.webp";
import Image from "next/image";

export default function MenuPrincial() {
  return (
    <div className="menu-principal">
      {/* Faixa preta no topo */}
      <div className="faixa-preta"></div>

      <ul className="container">
        <div>
          <Image src={logo} className="imagem" alt="Logo de uma Caveira" />
        </div>
        <li style={{ "--i": 8 }}>
          <BotaoRedondo
            url={"/botao1"}
            texto={"Gerar Encontro"}
            class="botao"
          />
        </li>
        <li style={{ "--i": 1 }} class="um">
          <BotaoRedondo
            url={"/gerenciar-ficha"}
            texto={"Gerenciar Fichas"}
            class="botao"
          />
        </li>
        <li style={{ "--i": 4 }} class="quatro">
          <BotaoRedondo url={"/botao3"} texto={"Relatórios"} class="botao" />
        </li>

        <li style={{ "--i": 7 }} class="sete">
          <BotaoRedondo
            url={"/botao4"}
            texto={"Gerenciar Grupo"}
            class="botao"
          />
        </li>
        <li style={{ "--i": 3 }} class="tres">
          <BotaoRedondo
            url={"/botao5"}
            texto={"Gerenciar Cenário"}
            class="botao"
          />
        </li>
        <li style={{ "--i": 5 }} class="cinco">
          <BotaoRedondo url={"/conta"} texto={"Conta"} class="botao" />
        </li>
        <li style={{ "--i": 6 }}>
          <BotaoRedondo url={"/login"} texto={"Sair"} class="botao" />
        </li>
      </ul>
    </div>
  );
}
