# Requisitos de Sistema - Tela de Login (login.html)

## # 1. Visão Geral do Produto
Esta página é o ponto de acesso restrito para a área logada do atleta. O objetivo central é fornecer uma interface de autenticação rápida, segura e focada, eliminando distrações visuais para que o usuário insira suas credenciais e entre diretamente no ambiente de treino.

---

## # 2. Identidade Visual e Aparência Moderna
*   **Paleta de Cores:** Fundo Dark Mode Carbono (`#0B0C10`), container central em Grafite Escuro (`#1F2833`) e linha de topo em Verde Neon (`#00FF66`).
*   **Design do Container:** Um card centralizado com largura máxima de `420px`, possuindo uma borda superior de destaque de `5px` com a cor Verde Neon para manter a consistência visual das outras telas.
*   **Efeitos de Foco:** Campos de entrada sem bordas aparentes por padrão, ganhando iluminação ativa ao clique.

---

## # 3. Requisitos de Conversão (COPY & Gatilhos)
*   **Subtítulo de Entrada:** *"Insira suas credenciais para treinar"* — reforçando o compromisso e a mentalidade esportiva logo no acesso.
*   **Chamada para Ação (CTA):** Botão de envio do formulário em caixa alta e itálico com o texto de alta intenção: **[Entrar na Arena]**.
*   **Ações de Suporte:** Inclusão de caixas de seleção para lembrete de dados (`Lembrar de mim`) e link para recuperação de conta (`Esqueceu a senha?`).

---

## # 4. Requisitos Funcionais (RF)
*   [ ] **RF-001 - Botão de Retorno Fluido:** Deve haver um link posicionado de forma absoluta no topo esquerdo do container com a label `← Voltar`, direcionando o usuário de volta para a Página Inicial (`index.html`).
*   [ ] **RF-002 - Foco Ativo nos Inputs:** Ao receber o foco do cursor (`input:focus`), a borda do campo deve mudar para a cor Verde Neon e disparar uma sombra suave (`box-shadow: 0 0 10px rgba(0, 255, 102, 0.2)`).
*   [ ] **RF-003 - Validação de Campos Obrigatórios:** Os campos de E-mail/Usuário e Senha devem possuir obrigatoriamente o atributo `required` do HTML5 para impedir envios em branco.
