# SNOOPY PetShop API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)
## Contextualização
SNOOPY PetShop tem atuado em nossa cidade com ótimo atendimento e agilidade, é nosso cliente e necessita de um sistema Web para registro dos seus pedidos no balcão.<br>O P.O. após uma visita ao cliente elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/snoopy-der-dc.png)
## Desafio
Desenvolver as funcionalidades conforme requisitos

### Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de Clientes.
    - [RF001.1] O sistema deve permitir o CRUD de telefones, pois cada cliente pode possuir 0 ou vários telefones de tipos diferentes como celular, fixo ou comercial.
    - [RF001.2] A rota **read** do cliente deve mostrar os dados de todos os clientes e seus respectivos telefones.
    - [RF001.3] A rota **readOne** do cliente deve mostrar os dados de um cliente específico, seus telefones e seus pedidos.
- [RF002] O sistema deve permitir o CRUD de pedidos.
    - [RF002.1] O sistema deve associar o pedido a um cliente.
    - [RF002.2] Ao cadastrar um novo pedido **create** no controller sistema calcular o subTotal multiplicando o preco pela quantidade.

### Casos de teste (Insomnia)
- [CT001] Deve ser cadastrado pelo menos 5 clientes.
- [CT002] Deve ser cadastrado ao menos 1 telefone para cada cliente.
    - [CT002.1] Pelo menos dois clientes devem ter dois ou mais telefones cadastrados.
- [CT003] Cadastre, altere e exclua um cliente.
- [CT004] Cadastre um pedido para cada cliente.
    - [CT004.1] Pelo menos um cliente deve ter dois ou mais pedidos cadastrados.
- [CT005] Cadastre, altere e exclua um pedido.

## Tecnologias

- **Node.js**: JavaScript para a construção do servidor da API.
- **Express.js**: Framework web para Node.js, usado para construir a API.
- **Prisma ORM**: Ferramenta de mapeamento (ORM) para facilitar a interação com o banco de dados.
- **MySQL**: Sistema de gerenciamento de banco de dados utilizado para armazenar os dados.
- **Insomnia**: Ferramenta para testar as rotas da API.


## Passo a Passo de como executar a API
Aqui está o conteúdo completo para você copiar e colar diretamente no arquivo `README.md`:

```md
# SNOOPY PetShop API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)

## Contextualização
SNOOPY PetShop tem atuado em nossa cidade com ótimo atendimento e agilidade, é nosso cliente e necessita de um sistema Web para registro dos seus pedidos no balcão.<br>O P.O. após uma visita ao cliente elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/snoopy-der-dc.png)

## Desafio
Desenvolver as funcionalidades conforme requisitos

### Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de Clientes.
    - [RF001.1] O sistema deve permitir o CRUD de telefones, pois cada cliente pode possuir 0 ou vários telefones de tipos diferentes como celular, fixo ou comercial.
    - [RF001.2] A rota **read** do cliente deve mostrar os dados de todos os clientes e seus respectivos telefones.
    - [RF001.3] A rota **readOne** do cliente deve mostrar os dados de um cliente específico, seus telefones e seus pedidos.
- [RF002] O sistema deve permitir o CRUD de pedidos.
    - [RF002.1] O sistema deve associar o pedido a um cliente.
    - [RF002.2] Ao cadastrar um novo pedido **create** no controller sistema calcular o subTotal multiplicando o preço pela quantidade.

### Casos de teste (Insomnia)
- [CT001] Deve ser cadastrado pelo menos 5 clientes.
- [CT002] Deve ser cadastrado ao menos 1 telefone para cada cliente.
    - [CT002.1] Pelo menos dois clientes devem ter dois ou mais telefones cadastrados.
- [CT003] Cadastre, altere e exclua um cliente.
- [CT004] Cadastre um pedido para cada cliente.
    - [CT004.1] Pelo menos um cliente deve ter dois ou mais pedidos cadastrados.
- [CT005] Cadastre, altere e exclua um pedido.

## Tecnologias
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs RESTful.
- **Prisma**: ORM para facilitar a interação com o banco de dados.
- **MySQL**: Banco de dados utilizado para armazenar informações.
- **Insomnia**: Ferramenta para testar as rotas da API.

## Passo a Passo de como executar a API

### 1. Clonar o Repositório

Primeiro, faça o clone do repositório para o seu ambiente local. Você pode usar o comando abaixo no seu terminal:

```bash
git clone https://github.com/usuario/snoopy-petshop-api.git
```

Substitua `usuario` pela URL do repositório correto, se necessário.

### 2. Acesse o Diretório do Projeto

Depois de clonar o repositório, acesse o diretório onde o projeto foi clonado:

```bash
cd snoopy-petshop-api
```

### 3. Instalar as Dependências

Instale todas as dependências do projeto usando o NPM. No diretório do projeto, execute o comando:

```bash
npm install
```

Esse comando vai instalar todas as dependências necessárias para rodar a API, como o **Express.js** e o **Prisma ORM**, entre outros.

### 4. Configuração do Banco de Dados

#### 4.1. Criar Banco de Dados no MySQL

Certifique-se de que o **MySQL** está instalado e em execução. Em seguida, crie um banco de dados para o projeto. Abra o MySQL e execute o seguinte comando:

```sql
CREATE DATABASE petshop;
```

#### 4.2. Configuração do arquivo `.env`

No diretório raiz do projeto, crie um arquivo chamado `.env` e adicione a string de conexão para o banco de dados MySQL. Aqui está um exemplo:

```ini
DATABASE_URL="mysql://root:senha@localhost:3306/petshop"
```

- **root**: Usuário do MySQL.
- **senha**: Senha do seu usuário no MySQL.
- **localhost**: Endereço do banco de dados (geralmente `localhost` se o MySQL estiver rodando localmente).
- **petshop**: O nome do banco de dados que você criou no MySQL.

#### 4.3. Executar as Migrações

Para criar as tabelas no banco de dados, execute as migrações do Prisma com o seguinte comando:

```bash
npx prisma migrate dev
```

Esse comando irá criar as tabelas no banco de dados conforme o modelo do Prisma.

### 5. Rodar a API

Agora, você pode rodar a API. No terminal, execute o comando:

```bash
npm start
```

A API estará rodando na porta 3000 por padrão, e você pode acessá-la através de `http://localhost:3001`.

### 6. Testar a API com Insomnia

Abra o **Insomnia** (ou qualquer outro cliente HTTP) e adicione as rotas conforme os casos de teste. Aqui estão algumas sugestões de rotas:

- **POST /clientes**: Criar um novo cliente.
- **GET /clientes**: Listar todos os clientes.
- **GET /clientes/{id}**: Obter informações de um cliente específico.
- **PATCH /clientes/{id}**: Atualizar um cliente específico.
- **DELETE /clientes/{id}**: Excluir um cliente específico.
- **POST /pedidos**: Criar um novo pedido.
- **GET /pedidos**: Listar todos os pedidos.
- **GET /pedidos/{id}**: Obter informações de um pedido específico.
- **PATCH /pedidos/{id}**: Atualizar um pedido específico.
- **DELETE /pedidos/{id}**: Excluir um pedido específico.

### 7. Conclusão

Agora, você tem a API rodando localmente e pronta para ser testada com as ferramentas mencionadas, como **Insomnia**. Caso queira rodar o projeto em um ambiente de produção, será necessário realizar algumas configurações adicionais, como a hospedagem da API e a configuração do banco de dados em produção.


 ### 8. A Print do Insomnia:

 ![Snoopy PetShop](./docs/prints/Captura%20de%20tela%202025-04-15%20155117.png)

```