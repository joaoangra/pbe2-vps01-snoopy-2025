# SNOOPY PetShop API - Situação de Aprendizagem - Back-End

Esta API foi desenvolvida como parte de um desafio de aprendizagem, com foco em atender as necessidades do SNOOPY PetShop, um cliente que exige um sistema Web para registro de pedidos no balcão.

## Contextualização

SNOOPY PetShop é uma empresa que atua em nossa cidade com ótimo atendimento e agilidade. O cliente necessita de um sistema para registrar seus pedidos no balcão, e o Product Owner (P.O.) elaborou o Diagrama Entidade-Relacionamento (DER) e o Diagrama de Classes (UML DC) a seguir, além de definir os requisitos funcionais.

![DER e DC](./docs/snoopy-der-dc.png)

## Desafio

O desafio é desenvolver as funcionalidades conforme os requisitos especificados abaixo:

### Requisitos Funcionais

- **[RF001] CRUD de Clientes**  
  O sistema deve permitir o CRUD (Criar, Ler, Atualizar, Deletar) de clientes.
  - **[RF001.1]** O sistema deve permitir o CRUD de telefones, pois cada cliente pode ter 0 ou mais telefones de tipos diferentes (celular, fixo, comercial).
  - **[RF001.2]** A rota **read** do cliente deve exibir os dados de todos os clientes, incluindo seus respectivos telefones.
  - **[RF001.3]** A rota **readOne** deve exibir os dados de um cliente específico, incluindo seus telefones e pedidos.

- **[RF002] CRUD de Pedidos**  
  O sistema deve permitir o CRUD de pedidos.
  - **[RF002.1]** O sistema deve associar um pedido a um cliente.
  - **[RF002.2]** Ao cadastrar um novo pedido, a rota **create** no controller deve calcular o subTotal multiplicando o preço pela quantidade.

### Casos de Teste (Insomnia)

- **[CT001]** Deve ser cadastrado pelo menos 5 clientes.
- **[CT002]** Deve ser cadastrado ao menos 1 telefone para cada cliente.
  - **[CT002.1]** Pelo menos dois clientes devem ter dois ou mais telefones cadastrados.
- **[CT003]** Cadastre, altere e exclua um cliente.
- **[CT004]** Cadastre um pedido para cada cliente.
  - **[CT004.1]** Pelo menos um cliente deve ter dois ou mais pedidos cadastrados.
- **[CT005]** Cadastre, altere e exclua um pedido.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs RESTful.
- **Prisma**: ORM para facilitar a interação com o banco de dados.
- **MySQL**: Banco de dados utilizado para armazenar informações.
- **Insomnia**: Ferramenta para testar as rotas da API.

## Passo a Passo para Executar a API

### 1. Clonar o Repositório

Primeiro, faça o clone do repositório para o seu ambiente local. Você pode usar o comando abaixo no seu terminal:

```bash
git clone https://github.com/usuario/snoopy-petshop-api.git
```

### 2. Instalar as Dependências

Após clonar o repositório, entre na pasta do projeto e instale as dependências:

```bash
cd snoopy-petshop-api
npm install
```

### 3. Configurar o Banco de Dados

1. Certifique-se de ter o MySQL instalado e em execução no seu computador.
2. Crie um banco de dados chamado `snoopy_petshop`.
3. Configure as credenciais de conexão do banco de dados no arquivo `.env` (exemplo abaixo):

```env
DATABASE_URL="mysql://username:password@localhost:3306/snoopy_petshop"
```

### 4. Executar as Migrations

Para criar as tabelas no banco de dados, execute as migrations com o Prisma:

```bash
npx prisma migrate dev
```

### 5. Iniciar a API

Agora você pode iniciar a API localmente:

```bash
npm start
```

A API estará rodando na URL `http://localhost:3000`.

### 6. Testar as Rotas com o Insomnia

Use o Insomnia para testar as rotas da API. Os endpoints principais são:

- **GET /clientes** - Lista todos os clientes.
- **GET /clientes/{id}** - Detalha um cliente específico.  
  - **readOne**: Esta rota retorna todos os dados de um cliente específico, incluindo seus telefones e pedidos associados.
- **POST /clientes** - Cria um novo cliente.
- **PUT /clientes/{id}** - Atualiza um cliente existente.
- **DELETE /clientes/{id}** - Exclui um cliente.

- **GET /pedidos** - Lista todos os pedidos.
- **POST /pedidos** - Cria um novo pedido.
- **PUT /pedidos/{id}** - Atualiza um pedido existente.
- **DELETE /pedidos/{id}** - Exclui um pedido.

## Contribuições

Contribuições são bem-vindas! Se você encontrou algum problema ou tem sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

Agora, a rota **readOne** foi devidamente explicada na seção de **Testar as Rotas com o Insomnia**. Ela detalha que essa rota retorna os dados de um cliente específico, incluindo seus telefones e pedidos associados. 

Se precisar de mais alguma coisa, estou à disposição!

 ### 8. A Print do Insomnia:

 ![Snoopy PetShop](./docs/prints/Captura%20de%20tela%202025-04-15%20155117.png)

```
