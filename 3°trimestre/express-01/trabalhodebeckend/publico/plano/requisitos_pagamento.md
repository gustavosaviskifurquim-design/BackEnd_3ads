# Requisitos de Sistema - Tela de Pagamento (pagamento.html)

## # 1. Visão Geral do Produto
Esta página é o ponto de fechamento e conversão financeira do ecossistema. O objetivo central é coletar os dados de faturamento do atleta de forma segura e transparente, dividindo o layout de forma inteligente para que o usuário veja o resumo do seu plano enquanto insere as informações de pagamento.

---

## # 2. Identidade Visual e Aparência Moderna
*   **Paleta de Cores:** Fundo Dark Mode Carbono (`#0B0C10`), container estrutural em Grafite Escuro (`#1F2833`) e borda lateral esquerda de destaque em Verde Neon (`#00FF66`) com espessura de `6px`.
*   **Layout Assimétrico:** Divisão em duas colunas através de CSS Grid (`grid-template-columns: 1fr 1.2fr`) para separar o Resumo do Pedido (esquerda) do Formulário de Cobrança (direita).
*   **Aba Interativa:** Botões seletores de método (Cartão/Pix) com fundo preto e bordas que se iluminam em Verde Neon quando ativos.

---

## # 3. Requisitos de Conversão (COPY & Gatilhos)
*   **Título do Resumo:** *"Seu Pedido"* — exibindo o plano selecionado e destacando o valor total na cor Verde Neon (`font-style: italic; font-weight: 800;`).
*   **Chamada para Ação (CTA):** Botão de envio em caixa alta com texto focado em ativação imediata: **[Ativar Meu Plano]**.
*   **Gatilho de Confirmação:** Mensagem motivacional exibida no modal após a aprovação para engajar o atleta: *"O seu aquecimento acabou de começar e a jornada rumo ao topo te espera!"*.

---

## # 4. Requisitos Funcionais (RF)
*   [ ] **RF-001 - Intercepção de Envio (JavaScript):** O sistema deve capturar o evento de envio do formulário e impedir o recarregamento padrão da página utilizando `event.preventDefault()`.
*   [ ] **RF-002 - Disparo de Modal de Sucesso:** Após a intercepção dos dados, o sistema deve adicionar a classe `.active` na camada do modal (`#thanksModal`), tornando-o visível com transição suave.
*   [ ] **RF-003 - Máscaras e Validação:** Todos os campos críticos de cartão (Nome, Número, Validade e CVV) devem possuir o atributo `required` para travar o fluxo caso fiquem em branco.
