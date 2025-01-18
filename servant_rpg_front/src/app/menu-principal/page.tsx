import "./menu-principal.css";
import BotaoRedondo from "../components/botaoRedondo/botaoRedondo";
import logo from "../../../public/images/caveira-logo.webp";
import Image from "next/image";

export default function MenuPrincial() {
  return (
    <div className="menu-principal">
      {/* Faixa preta no topo */}
      <div className="faixa-preta"></div>

      <div className="container">
        <div>
          <Image src={logo} className="imagem" alt="Logo de uma Caveira" />
        </div>
        <ul className="botoes">
          <li style={{ "--i": 8 }}>
            <BotaoRedondo
              url={"/botao1"}
              texto={"Gerar Encontro"}
              className="botao"
            />
          </li>
          <li style={{ "--i": 1 }} className="um">
            <BotaoRedondo
              url={"/gerenciar-ficha"}
              texto={"Gerenciar Fichas"}
              className="botao"
            />
          </li>
          <li style={{ "--i": 4 }} className="quatro">
            <BotaoRedondo
              url={"/botao3"}
              texto={"Relatórios"}
              className="botao"
            />
          </li>

          <li style={{ "--i": 7 }} className="sete">
            <BotaoRedondo
              url={"/gerenciar-grupo"}
              texto={"Gerenciar Grupo"}
              className="botao"
            />
          </li>
          <li style={{ "--i": 3 }} className="tres">
            <BotaoRedondo
              url={"/gerenciar-cenario"}
              texto={"Gerenciar Cenário"}
              className="botao"
            />
          </li>
          <li style={{ "--i": 5 }} className="cinco">
            <BotaoRedondo url={"/conta"} texto={"Conta"} className="botao" />
          </li>
          <li style={{ "--i": 6 }}>
            <BotaoRedondo url={"/login"} texto={"Sair"} className="botao" />
          </li>
        </ul>
      </div>
    </div>
  );
}
