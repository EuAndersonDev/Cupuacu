# MercadoJAM

---

**Descrição:**  
O Mercado Virtual é uma aplicação web projetada para facilitar a compra e venda de produtos online. O sistema oferece uma interface simples e intuitiva para que os clientes possam navegar, selecionar e comprar produtos, enquanto os administradores têm a capacidade de gerenciar o catálogo de produtos. O projeto utiliza Node.js e MySQL no backend, com Handlebars, CSS, e JavaScript no frontend.

---

**Prototipo figma: **
https://www.figma.com/design/1VVoyva0P6yTUpIDtmL4oW/Mercado?node-id=0-1&t=Ws59tH6CeCzhe7s7-1

## Índice

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Estrutura do Projeto

```markdown
**Raiz do Projeto**
│  
├── **/config**  
│   ├── db.js                # Configuração da conexão com o banco de dados  
│   └── config.js            # Outras configurações globais, como chaves de API, etc.  
│  
├── **/controllers**  
│   ├── authController.js    # Controle de autenticação e gerenciamento de sessão  
│   ├── productController.js # Lógica de negócios relacionada aos produtos  
│   ├── userController.js    # Gerenciamento de usuários (clientes e administradores)  
│   └── orderController.js   # Controle de pedidos e transações  
│  
├── **/models**  
│   ├── product.js           # Modelo para a tabela de produtos  
│   ├── user.js              # Modelo para a tabela de usuários  
│   ├── order.js             # Modelo para a tabela de pedidos  
│   └── cart.js              # Modelo para a tabela de carrinho  
│  
├── **/routes**  
│   ├── authRoutes.js        # Rotas relacionadas à autenticação  
│   ├── productRoutes.js     # Rotas para operações com produtos (CRUD)  
│   ├── userRoutes.js        # Rotas para gerenciamento de usuários  
│   └── orderRoutes.js       # Rotas para operações com pedidos  
│  
├── **/views**  
│   ├── **/layouts**  
│   │   └── main.hbs         # Layout principal do site  
│   ├── **/partials**  
│   │   ├── header.hbs       # Cabeçalho compartilhado  
│   │   ├── footer.hbs       # Rodapé compartilhado  
│   └── **/pages**  
│       ├── list.hbs         # Página para listagem de produtos  
│       ├── detail.hbs       # Página de detalhes do produto  
│       └── addEdit.hbs      # Formulário de adicionar/editar produtos  
│  
├── **/public**  
│   ├── **/css**  
│   │   └── styles.css       # Estilos CSS  
│   ├── **/js**  
│   │   └── main.js          # Scripts JavaScript  
│   └── **/images**          # Imagens do site  
│  
├── **/middleware**  
│   └── authMiddleware.js    # Middleware para proteger rotas  
│  
├── **/tests**               # Testes unitários e de integração  
│   ├── product.test.js      # Testes para a lógica de produtos  
│   └── auth.test.js         # Testes para autenticação  
│  
├── **/utils**  
│   └── helpers.js           # Funções auxiliares e utilitários  
│  
├── app.js                   # Aplicativo node
├── server.js                # Arquivo para rodar o servidor   
├── package.json             # Gerenciador de pacotes e dependências  
├── .env.exemple             # Exemplo de variáveis de ambiente
├── eslint.config.mjs        # Configuração do ESLint
├── .gitignore               # Arquivos e pastas a serem ignorados pelo git
├── database.sql             # Banco de dados a ser inserido no mysql
└── README.md                # Documentação do projeto  
```

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** - Versão 14 ou superior
- **npm ou yarn** - Gerenciador de pacotes
- **MySQL** - Versão 5.7 ou superior (Recomendado via Docker)

---

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/EuAndersonDev/MercadoJAM.git
    cd MercadoJAM
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configuração do banco de dados:

    Certifique-se de ter o MySQL configurado.  
    Copie o arquivo `.env.example` para `.env` e preencha com suas informações de banco de dados:

    ```plaintext
    HOST=localhost
    USER=root
    PASS=sua-senha
    NAME=nome-do-banco
    ```

---

## Uso

Para iniciar o servidor em modo de desenvolvimento, use o comando:

```bash
npm run dev
```

### Endpoints (http://localhost:3333)

- `GET /products`: Obtém todos os produtos.
- `POST /products`: Adiciona um novo produto (apenas administrador).
- `GET /users`: Obtém todos os usuários.
- `POST /users/login`: Autentica um usuário.

### Interface

A interface do usuário pode ser acessada em `http://localhost:3000`. Nela, é possível visualizar, adicionar ao carrinho, e comprar produtos.

---

## Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Faça suas alterações e commit (`git commit -m 'Minha nova feature'`).
4. Envie para o repositório (`git push origin minha-feature`).
5. Abra um Pull Request.

---

## Contato

- **Anderson Reis** - FullStack Developer
- **GitHub**: [AndersonReis04](https://github.com/EuAndersonDev)

- **Matheus Vinicius** - Backend Developer
- **GitHub**: [Matheus Vinicius](https://github.com/matheusviniciusbrito)

- **Jader Peres** - FrontEnd Developer
- **GitHub**: [JaderGP011](https://github.com/JaderGP011)
---
