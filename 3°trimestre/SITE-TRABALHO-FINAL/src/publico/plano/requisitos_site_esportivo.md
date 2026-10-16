# Requisitos de Sistema - Página de Alta Performance (SportX)

## # 1. Visão Geral do Produto
Esta página é focada na conversão direta para adesão de planos de treinamento e venda de vestuários de elite. Baseada na referência moderna **"SportX Template"**, adota uma estética agressiva, tipografia que transmite velocidade, forte contraste e transições fluidas para destacar a mentalidade de alta performance.

---

## # 2. Identidade Visual e Aparência Moderna
*   **Paleta de Cores:** Fundo Dark Mode (`#0B0C10` - Preto Carbono), acentos em Verde Neon (`#00FF66`) para pontos de ignição e cinza de suporte (`#C5C6C7`). Opção de forte contraste para leitura imersiva.
*   **Tipografia:** Títulos principais e botões em uma fonte robusta, em caixa alta e inclinada (ex: `font-style: italic; font-weight: 800;`). Corpo do texto limpo e geométrico (ex: `font-family: 'Poppins', sans-serif;`).
*   **Ícones e Elementos:** Linhas de corte retas e agressivas. Uso de sombras com efeito de brilho (`box-shadow` e `text-shadow`) simulando luz neon real nos botões e elementos ativos. Bordas com cantos de `4px` para manter o visual firme.

---

## # 3. Requisitos de Conversão (COPY & Gatilhos)

### *   **Seção Hero (AIDA - Atenção):**
> "Supere seus **Limites** a cada Segundo. Acelere sua evolução com a plataforma desenvolvida para quem respira performance."

### *   **Gatilhos de Escassez e Prova Social:**
Exibição de Badges dinâmicos com as tags **[Mais Vendido]** e **[Edição Limitada]** fixadas nos cards superiores dos produtos para gerar urgência mecânica de compra.

### *   **Chamadas para Ação (CTA):**
Botões de alta intenção com efeitos de levitação e brilho ao passar o mouse. Textos focados em superação:
*   `[Começar Jornada]` (Página Inicial)
*   `[Entrar na Arena]` (Tela de Login)
*   `[Ativar Meu Plano]` (Tela de Pagamento)
*   `[Comprar Equipamento]` (Vitrine de Produtos)

---

## # 4. Requisitos Funcionais (RF)
*   **RF-001 - Modal de Confirmação:** O sistema deve interceptar o envio do formulário de pagamento em JavaScript (`event.preventDefault()`) e disparar uma janela flutuante com uma mensagem motivacional de agradecimento, sem recarregar a tela.
*   **RF-002 - Vitrine Responsiva:** O catálogo deve usar um Grid inteligente (`repeat(auto-fit, minmax(260px, 1fr))`) para se reestruturar automaticamente em qualquer tamanho de monitor ou celular.
*   **RF-003 - Isolamento de Produto:** Imagens com fundo escuro devem ser acomodadas dentro de caixas brancas sólidas para garantir contraste absoluto das silhuetas dos calçados.
