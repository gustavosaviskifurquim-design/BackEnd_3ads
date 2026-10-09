# Requisitos de Sistema - Vitrine de Produtos (produtos.html)

## # 1. Visão Geral do Produto
Esta página funciona como o Marketplace oficial da **Arena SportX**. O objetivo central é expor o catálogo de vestuários e calçados de alta tecnologia de forma ultra-organizada, facilitando a navegação por categorias e impulsionando a conversão imediata de compras.

---

## # 2. Identidade Visual e Aparência Moderna
*   **Paleta de Cores:** Fundo Dark Mode Carbono (`#0B0C10`), blocos dos produtos em Grafite Escuro (`#1F2833`) e marcadores de destaque na cor Verde Neon (`#00FF66`).
*   **Isolamento de Silhueta:** Obrigatoriedade de um box interno totalmente branco (`#FFFFFF`) para envolver as imagens dos calçados escuros, garantindo legibilidade absoluta e contraste dos detalhes técnicos dos tênis.
*   **Grid Inteligente:** Distribuição dos itens em malha responsiva através de CSS Grid para evitar quebra de layout em resoluções menores.

---

## # 3. Requisitos de Conversão (COPY & Gatilhos)
*   **Badges de Urgência Mecânica:** Uso de marcadores flutuantes com fundo Verde Neon e letras pretas exibindo as tags de alta conversão: **[Mais Vendido]** e **[Edição Limitada]**.
*   **Chamada para Ação (CTA):** Botão posicionado na base de cada card, com bordas iluminadas e texto focado em aquisição de aparatos: **[Comprar Equipamento]**.
*   **Títulos de Categoria:** Divisões de seção estilizadas em itálico e caixa alta com borda lateral esquerda (ex: `Calçados de Manto` ou `Vestuário e Aparatos`).

---

## # 4. Requisitos Funcionais (RF)
*   [ ] **RF-001 - Grid Fluido Auto-Ajustável:** A lista de produtos deve utilizar a propriedade `repeat(auto-fit, minmax(260px, 1fr))` para se reorganizar sozinha e preencher a tela em qualquer monitor ou celular.
*   [ ] **RF-002 - Alinhamento Homogêneo:** O título do produto (`.product-name`) deve possuir uma altura fixa travada via CSS (`height: 42px; overflow: hidden;`) para que as caixas de preço e botões fiquem perfeitamente alinhados na mesma linha horizontal.
*   [ ] **RF-003 - Feedback de Interação (Hover):** Ao passar o ponteiro sobre o card do produto (`.product-card:hover`), o elemento deve subir levemente (`transform: translateY(-8px)`) e ganhar uma sombra brilhante Verde Neon.

