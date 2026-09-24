# Requisitos de Sistema - Página 4: Consolidado Geral e Arquitetura do Ecossistema "Doce"

## 1. Visão Geral do Ecossistema
Este documento consolida os requisitos técnicos transversais, unificando as melhores práticas das 3 páginas de referência analisadas em um único ecossistema modular para maximizar as vendas e a escalabilidade técnica do negócio de doces.

## 2. Padrões de Design e Interface Compartilhados
*   **Design System:** Criação de componentes reaproveitáveis (botões de checkout, cards de produto, seletores de quantidade) que se adaptam visualmente conforme o tema escolhido via variáveis CSS/Tokens de Design.
*   **Acessibilidade (WCAG):** Contraste adequado para textos sobre fundos pastéis, garantindo legibilidade para todos os públicos. Alt nos textos das fotos de doces para mecanismos de leitura de tela.

## 3. Estratégia de Copywriting Global Integrada
*   **Quebra de Objeções Geral:** Seção fixa ou flutuante respondendo a dúvidas comuns de quem compra doces online: *"Chega inteiro?", "Como funciona a refrigeração no transporte?", "Posso agendar o horário exato?"*
*   **Upsell e Cross-sell Automático:** No momento em que o usuário seleciona um doce principal (ex: bolo), o sistema oferece dinamicamente complementos necessários baseados em texto persuasivo (*"Que tal adicionar velas mágicas artesanais por apenas R$ X?"*).

## 4. Requisitos Técnicos e Integrações Obrigatórias (RF)
*   **RF-GEN-001 - Cálculo de Frete por Geolocalização:** Integração com a API do Google Maps para calcular o custo de entrega com base na fragilidade e distância exata do ateliê.
*   **RF-GEN-002 - Painel Administrativo de Produção (Cozinha):** Tela dedicada para a confeitaria gerenciar os pedidos recebidos, separados por data de entrega e status de produção.
*   **RF-GEN-003 - Disparos Automatizados:** Envio de alertas de status via WhatsApp/E-mail (ex: *"Seu pedido entrou no forno!"* ou *"Seu doce saiu para entrega!"*).

## 5. Requisitos de Infraestrutura e Performance (RNF)
*   **RNF-GEN-001 - Cache Avançado:** Utilização de uma rede de entrega de conteúdo (CDN Cloudflare) para garantir abertura instantânea dos catálogos de imagens.
*   **RNF-GEN-002 - SEO Avançado para Negócios Locais:** Estruturação de dados estruturados (Schema.org) com a categoria *Bakery/CandyStore* para indexação prioritária na região de atuação da doceria.
