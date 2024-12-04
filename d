[1mdiff --git a/servant_rpg_front/src/app/gerenciar-ficha/criar-ficha/criarficha.css b/servant_rpg_front/src/app/gerenciar-ficha/criar-ficha/criarficha.css[m
[1mnew file mode 100644[m
[1mindex 0000000..2f4e72a[m
[1m--- /dev/null[m
[1m+++ b/servant_rpg_front/src/app/gerenciar-ficha/criar-ficha/criarficha.css[m
[36m@@ -0,0 +1,101 @@[m
[32m+[m[32m.pagina-editar-personagem {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  padding: 20px;[m
[32m+[m[32m  font-family: Arial, sans-serif;[m
[32m+[m[32m  background-color: #441c1c;[m
[32m+[m[32m  height: 100vh;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-voltar {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  left: 2%;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  margin-bottom: 10px;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m  background-color: #180a0a;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  text-decoration: none; /* Remove sublinhado */[m
[32m+[m[32m  font-size: 1.2rem; /* Tamanho da fonte */[m
[32m+[m[32m  cursor: pointer; /* Muda o cursor ao passar o mouse */[m
[32m+[m[32m  width: fit-content; /* O botão se ajusta ao conteúdo */[m
[32m+[m[32m  min-width: 100px; /* Define uma largura mínima para o botão */[m
[32m+[m[32m  display: flex; /* Torna o botão flexível */[m
[32m+[m[32m  justify-content: center; /* Centraliza o texto horizontalmente */[m
[32m+[m[32m  align-items: center; /* Centraliza o texto verticalmente */[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-voltar:hover {[m
[32m+[m[32m  background-color: #643030;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.formulario {[m
[32m+[m[32m  display: grid;[m
[32m+[m[32m  grid-template-columns: repeat(2, 1fr);[m
[32m+[m[32m  gap: 20px;[m
[32m+[m[32m  max-width: 600px;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  background-color: white;[m
[32m+[m[32m  padding: 20px;[m
[32m+[m[32m  border-radius: 8px;[m
[32m+[m[32m  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.campo {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mlabel {[m
[32m+[m[32m  margin-bottom: 5px;[m
[32m+[m[32m  font-size: 14px;[m
[32m+[m[32m  color: #495057;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.input-campo {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  border: 1px solid #ced4da;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.textarea-campo {[m
[32m+[m[32m  height: 100px;[m
[32m+[m[32m  resize: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.footer-formulario {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: space-between;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  grid-column: span 2;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.checkbox-jogador {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  gap: 8px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-salvar {[m
[32m+[m[32m  padding: 10px 20px;[m
[32m+[m[32m  background-color: #5cb85c;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-salvar:hover {[m
[32m+[m[32m  background-color: #4cae4c;[m
[32m+[m[32m}[m
[1mdiff --git a/servant_rpg_front/src/app/gerenciar-ficha/criar-ficha/page.js b/servant_rpg_front/src/app/gerenciar-ficha/criar-ficha/page.js[m
[1mnew file mode 100644[m
[1mindex 0000000..ddb0067[m
[1m--- /dev/null[m
[1m+++ b/servant_rpg_front/src/app/gerenciar-ficha/criar-ficha/page.js[m
[36m@@ -0,0 +1,77 @@[m
[32m+[m[32mimport "./criarficha.css";[m
[32m+[m
[32m+[m[32mexport default function PaginaEditarPersonagem() {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="pagina-editar-personagem">[m
[32m+[m[32m      <a className="botao-voltar" type="button" href="/gerenciar-ficha">[m
[32m+[m[32m        Voltar[m
[32m+[m[32m      </a>[m
[32m+[m[32m      <form className="formulario">[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="nome">Nome</label>[m
[32m+[m[32m          <input type="text" id="nome" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="nivel">Nível</label>[m
[32m+[m[32m          <input type="number" id="nivel" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="classe">Classe</label>[m
[32m+[m[32m          <input type="text" id="classe" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="familia">Família</label>[m
[32m+[m[32m          <input type="text" id="familia" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="vida">Vida</label>[m
[32m+[m[32m          <input type="number" id="vida" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="ac">AC</label>[m
[32m+[m[32m          <input type="number" id="ac" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="iniciativa">Iniciativa</label>[m
[32m+[m[32m          <input type="text" id="iniciativa" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="tamanho">Tamanho</label>[m
[32m+[m[32m          <input type="text" id="tamanho" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="spellSlots">Spell Slots</label>[m
[32m+[m[32m          <input type="number" id="spellSlots" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="profA">Prof A</label>[m
[32m+[m[32m          <input type="text" id="profA" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="profM">Prof M</label>[m
[32m+[m[32m          <input type="text" id="profM" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="caracteristicas">Características</label>[m
[32m+[m[32m          <textarea[m
[32m+[m[32m            id="caracteristicas"[m
[32m+[m[32m            className="input-campo textarea-campo"[m
[32m+[m[32m          ></textarea>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="campo">[m
[32m+[m[32m          <label htmlFor="profD">Prof D</label>[m
[32m+[m[32m          <input type="text" id="profD" className="input-campo" />[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="footer-formulario">[m
[32m+[m[32m          <label className="checkbox-jogador">[m
[32m+[m[32m            <input type="checkbox" />[m
[32m+[m[32m            Jogador[m
[32m+[m[32m          </label>[m
[32m+[m[32m          <button className="botao-salvar" type="button">[m
[32m+[m[32m            Salvar[m
[32m+[m[32m          </button>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </form>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[1mdiff --git a/servant_rpg_front/src/app/gerenciar-ficha/gerenciarficha.css b/servant_rpg_front/src/app/gerenciar-ficha/gerenciarficha.css[m
[1mnew file mode 100644[m
[1mindex 0000000..d659bfc[m
[1m--- /dev/null[m
[1m+++ b/servant_rpg_front/src/app/gerenciar-ficha/gerenciarficha.css[m
[36m@@ -0,0 +1,124 @@[m
[32m+[m[32m.pagina-mostrar-personagem {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  height: 100vh;[m
[32m+[m[32m  font-family: Arial, sans-serif;[m
[32m+[m[32m  background-color: #f8f9fa;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.sidebar {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  padding: 20px;[m
[32m+[m[32m  width: 200px;[m
[32m+[m[32m  background-color: #000000;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.seletor-personagem {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  margin-bottom: 20px;[m
[32m+[m[32m  padding: 8px;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-criar,[m
[32m+[m[32m.botao-voltar {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  margin-bottom: 10px;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m  background-color: #441c1c;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  text-decoration: none; /* Remove sublinhado */[m
[32m+[m[32m  font-size: 1.2rem; /* Tamanho da fonte */[m
[32m+[m[32m  cursor: pointer; /* Muda o cursor ao passar o mouse */[m
[32m+[m[32m  width: fit-content; /* O botão se ajusta ao conteúdo */[m
[32m+[m[32m  min-width: 100px; /* Define uma largura mínima para o botão */[m
[32m+[m[32m  display: flex; /* Torna o botão flexível */[m
[32m+[m[32m  justify-content: center; /* Centraliza o texto horizontalmente */[m
[32m+[m[32m  align-items: center; /* Centraliza o texto verticalmente */[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-criar:hover,[m
[32m+[m[32m.botao-voltar:hover {[m
[32m+[m[32m  background-color: #6e2d2d;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.conteudo-ficha {[m
[32m+[m[32m  flex: 1;[m
[32m+[m[32m  padding: 20px;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  background-color: #441c1c;[m
[32m+[m[32m  overflow-y: auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.linha-campos {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: space-between;[m
[32m+[m[32m  margin-bottom: 20px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.linha-campo-unico {[m
[32m+[m[32m  margin-bottom: 20px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.campo {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  flex: 1;[m
[32m+[m[32m  margin-right: 10px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.campo:last-child {[m
[32m+[m[32m  margin-right: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mlabel {[m
[32m+[m[32m  font-weight: bold;[m
[32m+[m[32m  margin-bottom: 5px;[m
[32m+[m[32m  font-size: 14px;[m
[32m+[m[32m  color: #495057;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mp {[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  padding: 8px;[m
[32m+[m[32m  background-color: #e9ecef;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.footer-ficha {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: space-between;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  margin-top: auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.checkbox-jogador {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  gap: 8px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-deletar {[m
[32m+[m[32m  padding: 10px 20px;[m
[32m+[m[32m  background-color: #dc3545;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.botao-deletar:hover {[m
[32m+[m[32m  background-color: #bd2130;[m
[32m+[m[32m}[m
[1mdiff --git a/servant_rpg_front/src/app/gerenciar-ficha/page.js b/servant_rpg_front/src/app/gerenciar-ficha/page.js[m
[1mnew file mode 100644[m
[1mindex 0000000..7fc06a6[m
[1m--- /dev/null[m
[1m+++ b/servant_rpg_front/src/app/gerenciar-ficha/page.js[m
[36m@@ -0,0 +1,104 @@[m
[32m+[m[32mimport "./gerenciarficha.css";[m
[32m+[m[32mimport { redirect } from "next/navigation";[m
[32m+[m
[32m+[m[32mexport default function PaginaMostrarPersonagem() {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="pagina-mostrar-personagem">[m
[32m+[m[32m      <div className="sidebar">[m
[32m+[m[32m        <select className="seletor-personagem">[m
[32m+[m[32m          <option value="">Selecione um personagem</option>[m
[32m+[m[32m          <option value="personagem1">Personagem 1</option>[m
[32m+[m[32m          <option value="personagem2">Personagem 2</option>[m
[32m+[m[32m          <option value="personagem3">Personagem 3</option>[m
[32m+[m[32m        </select>[m
[32m+[m[32m        <a[m
[32m+[m[32m          className="botao-criar"[m
[32m+[m[32m          type="button"[m
[32m+[m[32m          href="/gerenciar-ficha/criar-ficha"[m
[32m+[m[32m        >[m
[32m+[m[32m          Criar[m
[32m+[m[32m        </a>[m
[32m+[m[32m        <a className="botao-voltar" type="button" href="/menu-principal">[m
[32m+[m[32m          Voltar[m
[32m+[m[32m        </a>[m
[32m+[m[32m      </div>[m
[32m+[m[32m      <div className="conteudo-ficha">[m
[32m+[m[32m        <div className="linha-campos">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Nome</label>[m
[32m+[m[32m            <p>Exemplo de Nome</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Nível</label>[m
[32m+[m[32m            <p>5</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="linha-campos">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Classe</label>[m
[32m+[m[32m            <p>Mago</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Família</label>[m
[32m+[m[32m            <p>Família Exemplo</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="linha-campos">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Vida</label>[m
[32m+[m[32m            <p>20</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>AC</label>[m
[32m+[m[32m            <p>15</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="linha-campos">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Iniciativa</label>[m
[32m+[m[32m            <p>+3</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Tamanho</label>[m
[32m+[m[32m            <p>Médio</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="linha-campos">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Spell Slots</label>[m
[32m+[m[32m            <p>3</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Prof A</label>[m
[32m+[m[32m            <p>+2</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="linha-campos">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Prof M</label>[m
[32m+[m[32m            <p>+1</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Prof D</label>[m
[32m+[m[32m            <p>+4</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="linha-campo-unico">[m
[32m+[m[32m          <div className="campo">[m
[32m+[m[32m            <label>Características</label>[m
[32m+[m[32m            <p>Habilidade especial do personagem.</p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="footer-ficha">[m
[32m+[m[32m          <label className="checkbox-jogador">[m
[32m+[m[32m            <input type="checkbox" />[m
[32m+[m[32m            Jogador[m
[32m+[m[32m          </label>[m
[32m+[m[32m          <button className="botao-deletar" type="button">[m
[32m+[m[32m            Deletar[m
[32m+[m[32m          </button>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[1mdiff --git a/servant_rpg_front/src/app/menu-principal/menu-principal.css b/servant_rpg_front/src/app/menu-principal/menu-principal.css[m
[1mindex fd9798e..c4e795e 100644[m
[1m--- a/servant_rpg_front/src/app/menu-principal/menu-principal.css[m
[1m+++ b/servant_rpg_front/src/app/menu-principal/menu-principal.css[m
[36m@@ -1,53 +1,87 @@[m
 .menu-principal {[m
[31m-    display: flex;[m
[31m-    justify-content: center;[m
[31m-    align-items: center;[m
[31m-    height: 100vh;[m
[31m-    background-color: #441c1c;[m
[31m-    margin: 0;[m
[31m-    flex-direction: column; /* Faz com que a tela seja organizada de cima para baixo */[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  height: 100vh;[m
[32m+[m[32m  background-color: #441c1c;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  flex-direction: column; /* Faz com que a tela seja organizada de cima para baixo */[m
 }[m
 [m
 /* Faixa preta no topo */[m
 .faixa-preta {[m
[31m-    width: 100%;[m
[31m-    height: 50px; /* Altura da faixa preta */[m
[31m-    background-color: black;[m
[31m-    position: relative;[m
[31m-    top: -140px; /* Move a faixa para cima em 10px */[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 50px; /* Altura da faixa preta */[m
[32m+[m[32m  background-color: black;[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  top: -140px; /* Move a faixa para cima em 10px */[m
 }[m
 [m
[32m+[m[32mul {[m
[32m+[m[32m  list-style-type: none;[m
[32m+[m[32m}[m
 .container {[m
[31m-    display: flex;[m
[31m-    justify-content: center; /* Centraliza os itens dentro do container */[m
[31m-    align-items: center;[m
[31m-    width: 80%;[m
[31m-    gap: 20px; /* Espaçamento entre as colunas e a imagem */[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center; /* Centraliza os itens dentro do container */[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  width: 80%;[m
[32m+[m[32m  height: 400px;[m
[32m+[m[32m  gap: 20px; /* Espaçamento entre as colunas e a imagem */[m
[32m+[m[32m  position: relative;[m
 }[m
 [m
[31m-.coluna {[m
[31m-    display: flex;[m
[31m-    flex-direction: column;[m
[31m-    justify-content: center;[m
[31m-    gap: 40px; /* Espaçamento entre os botões na coluna */[m
[32m+[m[32m.container li {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m  transform-origin: 370px;[m
[32m+[m[32m  transform: rotate(calc(360deg / 8 * var(--i))) translateX(50px);[m
[32m+[m[32m  left: 366px;[m
[32m+[m[32m  top: 140px;[m
 }[m
 [m
[31m-.imagem-container {[m
[31m-    display: flex;[m
[31m-    justify-content: center;[m
[31m-    align-items: center;[m
[32m+[m[32m.container li a {[m
[32m+[m[32m  transform: rotate(calc(360deg / -8 * var(--i)));[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.container li.um {[m
[32m+[m[32m  top: 180px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.container li.tres {[m
[32m+[m[32m  top: 180px;[m
[32m+[m[32m  left: 386px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.container li.quatro {[m
[32m+[m[32m  top: 142px;[m
[32m+[m
[32m+[m[32m  left: 346px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.container li.cinco {[m
[32m+[m[32m  top: 129px;[m
[32m+[m[32m  left: 356px;[m
 }[m
 [m
[31m-.imagem-centralizada {[m
[31m-    width: 100%; /* Faz com que a imagem ocupe 100% da largura do contêiner */[m
[31m-    max-width: 300px; /* Ajusta o tamanho máximo da imagem */[m
[31m-    height: auto;[m
[31m-    border-radius: 10px; /* Se desejar arredondar os cantos da imagem */[m
[32m+[m[32m.container li.sete {[m
[32m+[m[32m  left: 336px;[m
 }[m
[32m+[m[32m.imagem-container {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.imagem {[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  max-width: 300px; /* Ajusta o tamanho máximo da imagem */[m
[32m+[m[32m  height: auto;[m
 [m
[31m-.logo {[m
[31m-    width: 100%; /* Faz com que a imagem ocupe 100% da largura do contêiner */[m
[31m-    max-width: 300px; /* Ajusta o tamanho máximo da imagem */[m
[31m-    height: auto;[m
[31m-    border-radius: 10px; /* Se desejar arredondar os cantos da imagem */[m
[32m+[m[32m  z-index: 1000;[m
[32m+[m[32m  box-shadow: black;[m
[32m+[m[32m  border-radius: 50%;[m
 }[m
[1mdiff --git a/servant_rpg_front/src/app/menu-principal/page.js b/servant_rpg_front/src/app/menu-principal/page.js[m
[1mindex 6fc9361..4327096 100644[m
[1m--- a/servant_rpg_front/src/app/menu-principal/page.js[m
[1m+++ b/servant_rpg_front/src/app/menu-principal/page.js[m
[36m@@ -4,30 +4,54 @@[m [mimport logo from "../../../public/images/caveira-logo.webp";[m
 import Image from "next/image";[m
 [m
 export default function MenuPrincial() {[m
[31m-    return ([m
[31m-        <div className="menu-principal">[m
[31m-            {/* Faixa preta no topo */}[m
[31m-            <div className="faixa-preta"></div>[m
[31m-            <div className="container">[m
[31m-                <div className="coluna">[m
[31m-                    <BotaoRedondo url={"/botao1"} texto={"Gerar Encontro"}/>[m
[31m-                    <BotaoRedondo url={"/botao2"} texto={"Gerenciar Fichas"}/>[m
[31m-                    <BotaoRedondo url={"/botao3"} texto={"Relatórios"}/>[m
[31m-                </div>[m
[31m-                <div className="imagem-container">[m
[31m-                    <Image[m
[31m-                        src={logo}[m
[31m-                        className="imagem-centralizada"[m
[31m-                        alt="Logo de uma Caveira"[m
[31m-                    />[m
[31m-                </div>[m
[31m-                <div className="coluna">[m
[31m-                    <BotaoRedondo url={"/botao4"} texto={"Gerenciar Grupo"}/>[m
[31m-                    <BotaoRedondo url={"/botao5"} texto={"Gerenciar Cenário"}/>[m
[31m-                    <BotaoRedondo url={"/conta"} texto={"Conta"}/>[m
[31m-                    <BotaoRedondo url={"/login"} texto={"Sair"}/>[m
[31m-                </div>[m
[31m-            </div>[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="menu-principal">[m
[32m+[m[32m      {/* Faixa preta no topo */}[m
[32m+[m[32m      <div className="faixa-preta"></div>[m
[32m+[m
[32m+[m[32m      <ul className="container">[m
[32m+[m[32m        <div>[m
[32m+[m[32m          <Image src={logo} className="imagem" alt="Logo de uma Caveira" />[m
         </div>[m
[31m-    );[m
[32m+[m[32m        <li style={{ "--i": 8 }}>[m
[32m+[m[32m          <BotaoRedondo[m
[32m+[m[32m            url={"/botao1"}[m
[32m+[m[32m            texto={"Gerar Encontro"}[m
[32m+[m[32m            class="botao"[m
[32m+[m[32m          />[m
[32m+[m[32m        </li>[m
[32m+[m[32m        <li style={{ "--i": 1 }} class="um">[m
[32m+[m[32m          <BotaoRedondo[m
[32m+[m[32m            url={"/gerenciar-ficha"}[m
[32m+[m[32m            texto={"Gerenciar Fichas"}[m
[32m+[m[32m            class="botao"[m
[32m+[m[32m          />[m
[32m+[m[32m        </li>[m
[32m+[m[32m        <li style={{ "--i": 4 }} class="quatro">[m
[32m+[m[32m          <BotaoRedondo url={"/botao3"} texto={"Relatórios"} class="botao" />[m
[32m+[m[32m        </li>[m
[32m+[m
[32m+[m[32m        <li style={{ "--i": 7 }} class="sete">[m
[32m+[m[32m          <BotaoRedondo[m
[32m+[m[32m            url={"/botao4"}[m
[32m+[m[32m            texto={"Gerenciar Grupo"}[m
[32m+[m[32m            class="botao"[m
[32m+[m[32m          />[m
[32m+[m[32m        </li>[m
[32m+[m[32m        <li style={{ "--i": 3 }} class="tres">[m
[32m+[m[32m          <BotaoRedondo[m
[32m+[m[32m            url={"/botao5"}[m
[32m+[m[32m            texto={"Gerenciar Cenário"}[m
[32m+[m[32m            class="botao"[m
[32m+[m[32m          />[m
[32m+[m[32m        </li>[m
[32m+[m[32m        <li style={{ "--i": 5 }} class="cinco">[m
[32m+[m[32m          <BotaoRedondo url={"/conta"} texto={"Conta"} class="botao" />[m
[32m+[m[32m        </li>[m
[32m+[m[32m        <li style={{ "--i": 6 }}>[m
[32m+[m[32m          <BotaoRedondo url={"/login"} texto={"Sair"} class="botao" />[m
[32m+[m[32m        </li>[m
[32m+[m[32m      </ul>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
 }[m
