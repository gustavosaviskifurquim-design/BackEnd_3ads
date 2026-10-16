# Requisitos de Sistema - História e Manifesto (historia.html)

## # 1. Visão Geral do Produto
Esta página é o pilar institucional e de branding do ecossistema. O objetivo central é conectar emocionalmente o usuário com a marca através do *Manifesto SportX*, transformando clientes comuns em defensores da marca ao explicar o propósito por trás da nossa identidade visual e da nossa cultura de treino.

---

## # 2. Identidade Visual e Aparência Moderna
*   **Paleta de Cores:** Fundo em gradiente suave descendente (`linear-gradient`) partindo do Preto Carbono (`#0B0C10`) até o Grafite Escuro (`#1F2833`), com acentos de marca em Verde Neon (`#00FF66`).
*   **Layout Assimétrico Distribuído:** Divisão em duas colunas através de CSS Grid (`grid-template-columns: 1fr 1.2fr`) para criar um impacto visual moderno e descentralizado.
*   **Textura Tipográfica Invisível:** Inclusão de um elemento decorativo flutuante de fundo (`::before`) com a palavra "VOLTAGE" em tamanho ultra-gigante e opacidade quase invisível (`0.03`) para conferir um aspecto tecnológico de *streetwear*.

---

## # 3. Requisitos de Conversão (COPY & Gatilhos)
*   **Headline do Manifesto:** *"Energia Vital. Alta Voltagem."* — Destacando o significado do Verde Neon como o ponto de ignição de quem treina duro.
*   **Título Histórico Narrativo:** *"Forjados na Inconformidade"* — Estabelecendo o posicionamento de mercado de que a SportX não aceita o comum.
*   **Estatísticas de Impacto:** Exibição de 3 contadores numéricos estáticos de prova social na base do texto: `100% Curadoria de Elite`, `24/7 Foco em Performance` e `+50k Atletas na Arena`.

---

## # 4. Requisitos Funcionais (RF)
*   [ ] **RF-001 - Borda Lateral de Destaque:** O card de conceito do manifesto (coluna esquerda) deve possuir uma borda lateral esquerda de `6px` na cor Verde Neon para isolá-lo visualmente da narrativa textual.
*   [ ] **RF-002 - Badge de Propósito Fixo:** Um selo com bordas finas e fundo semitransparente contendo o texto *[Propósito Inabalável]* deve ser renderizado na base do bloco de conceito.
*   [ ] **RF-003 - Alinhamento Responsivo Adaptável:** Quando o site for visualizado em telas menores que `992px`, o Grid de duas colunas deve colapsar automaticamente para uma única coluna centralizada, jogando o texto para baixo do bloco visual de forma fluida.
