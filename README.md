🏠 Property Sales React Website

Aplicação web para exibição de imóveis utilizando React, TypeScript, TailwindCSS e arquitetura escalável baseada em boas práticas como SOLID, Clean Code, Atomic Design e Domain-Driven Design (DDD).

🚀 Como rodar o projeto localmente

1. Clone o repositório

https://github.com/seu-usuario/property-sales-react-website.git
cd property-sales-react-website

2. Instale as dependências

npm install

3. Inicie o servidor de desenvolvimento

npm run dev

Acesse http://localhost:5173 para visualizar o projeto rodando.

🧪 Tecnologias utilizadas

React 19 — Biblioteca principal da aplicação

TypeScript — Tipagem estática

Vite — Empacotador rápido para front-end

TailwindCSS — Framework de estilos utilitários

React Router DOM — Gerenciamento de rotas

React Icons — Ícones em SVG

Arquitetura Atomic Design

Padrões SOLID + Clean Code

DDD (Domain-Driven Design) para validações e lógica de domínio

🧱 Estrutura de pastas

src/
├── app/                     # Configuração principal da aplicação
├── domain/                  # Regras de negócio
│   └── validations/         # Validações reutilizáveis e puras
├── presentation/            # Camada visual (componentes/pages)
│   ├── components/
│   │   ├── atoms/           # Elementos básicos: botão, input, texto
│   │   ├── molecules/       # Combinações simples: formulários
│   │   └── organisms/       # Estruturas mais completas: cards, toolbar
│   └── pages/               # Páginas da aplicação (Login, Showcase, NotFound)
├── assets/                  # Imagens e ícones
├── routes/                  # Gerenciamento de rotas da aplicação
├── shared/                  # Constantes globais (ex: cores)
└── main.tsx                 # Ponto de entrada da aplicação

⚙️ Metodologias e Arquitetura

🔹 Atomic Design

Organização dos componentes em níveis de complexidade:

Atoms: componentes puros e reaproveitáveis como Button, Input.

Molecules: agrupamentos simples como formulários.

Organisms: estruturas visuais mais robustas como CardLogin, Toolbar.

🔹 SOLID + Clean Code

Cada função ou componente tem uma única responsabilidade.
Separação de responsabilidades entre UI e regras de negócio. Código limpo, sem acoplamentos desnecessários.

🔹 Domain-Driven Design (DDD)

Toda a lógica de validação e regras de negócio reside em domain/. Isso facilita testabilidade, reuso e separação clara de camadas.

📄 Páginas e Fluxo

LoginPage: Formulário com validação de email e senha, login simulado e modo de registro

ShowcasePage: Página principal com serviços e propriedades em destaque

NotFoundPage: Página de erro personalizada para rotas inválidas

✅ Funcionalidades implementadas

Login com validações de campos obrigatórios, formato e senha

Registro de usuário temporário local

Redirecionamento pós login com useNavigate

Layout responsivo e organizado

Componentes reaproveitáveis e padronizados

📌 Próximos passos

Conexão com API real para autenticação

Gerenciamento de estado global (ex: Zustand ou Redux)

Integração com banco de dados

Upload de imagens e novos cadastros de imóveis

Testes unitários com Jest

Feito com 💛 por Jessica Woytuski • Agência Batatinha™

