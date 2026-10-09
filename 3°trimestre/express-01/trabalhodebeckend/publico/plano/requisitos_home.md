# Requisitos de Sistema - Página Inicial (index.html)

## # 1. Visão Geral do Produto
Esta página é a porta de entrada da **Arena SportX**. O objetivo central é capturar a atenção do usuário (*AIDA - Atenção*), apresentar o posicionamento de mercado da marca e direcioná-lo de forma rápida para as áreas de conversão através de um design agressivo e de alta performance.

---

## # 2. Identidade Visual e Aparência Moderna
*   **Paleta de Cores:** Fundo Dark Mode total (`#0B0C10` - Preto Carbono), blocos secundários em Grafite (`#1F2833`) e acentos energéticos em Verde Neon (`#00FF66`).
*   **Tipografia:** Título principal em caixa alta, peso ultra-negrito e inclinação dinâmica (`font-style: italic; font-weight: 800;`) para transmitir o conceito de velocidade.
*   **Efeitos e Transições:** O botão de ação principal deve conter uma sombra com efeito de brilho em LED (`box-shadow: 0 5px 15px rgba(0, 255, 102, 0.4)`).

---

## # 3. Requisitos de Conversão (COPY & Gatilhos)
*   **Seção Hero (Headline Principal):** *"Supere seus Limites a cada Segundo. Acelere sua evolução com a plataforma desenvolvida para quem respira performance."*
*   **Chamada para Ação (CTA):** Botão principal com a label de alta intenção e foco motivacional: **[Começar Jornada]**.
*   **Pilares Institucionais:** Exibição de 3 blocos informativos baseados em metas: `01. Foco Total`, `02. Equipamentos` e `03. Comunidade`.

---

## # 4. Requisitos Funcionais (RF)
*   [ ] **RF-001 - Menu de Navegação Fixo:** O cabeçalho da página deve permanecer fixado no topo da tela (`position: fixed`) durante a rolagem, mantendo 95% de opacidade para não obstruir o conteúdo.
*   [ ] **RF-002 - Destaque do Logotipo:** A última letra do logotipo institucional ("X") deve receber obrigatoriamente a cor Verde Neon separada por uma tag `<span>`.
*   [ ] **RF-003 - Efeito de Levitação (Hover):** Ao passar o mouse sobre os cards dos pilares, os elementos devem se deslocar suavemente para cima (`transform: translateY(-10px)`) em um intervalo de 0.3 segundos.
