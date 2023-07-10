# 🎬 Movie API (Typescript)
Movie API é uma API em Typescript que permite cadastrar e gerenciar informações sobre filmes. Ela utiliza o banco de dados MongoDB para armazenar os dados dos filmes.

## 🚀 Funcionalidades
A API possui as seguintes funcionalidades:

- Cadastro de filmes com as informações: título, classificação, descrição, diretor, estrelas e pôster.
- Listagem de todos os filmes cadastrados.
- Consulta de um filme específico pelo seu ID.
- Remoção de um filme pelo seu ID.
- Atualização das informações de um filme pelo seu ID.

## ✅ Pré-requisitos
Antes de rodar o projeto, verifique se você tem os seguintes pré-requisitos:

- [Node.js](https://nodejs.org/en) 
- MongoDB (você pode utilizar o [MongoDB Atlas](https://www.mongodb.com/atlas/database))

## 💻 Como rodar o projeto
1. Clone o repositório para sua máquina local:

   ```
   git clone https://github.com/VictorNathanael/movie-api-ts.git
   ```

2. Acesse o diretório do projeto:

   ```
   cd movie-api-ts
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Crie um arquivo .env na raiz do projeto e defina a variável DB_URI com a string de conexão do seu banco de dados MongoDB.

   ```
   DB_URI=mongodb+srv://victor:abcdefg123456@cluster.mongodb.net/
   ```

5. Inicie o servidor:
   ```
   npm run dev
   ```

6. Acesse a API em http://localhost:3000.


## 🔗Rotas da API
A API possui as seguintes rotas:

- GET `/test`: Rota de teste para verificar se a API está funcionando corretamente. Retorna "API Working!".

- POST `/movie`: Rota para cadastrar um novo filme. Os dados devem ser enviados no formato JSON, seguindo o exemplo abaixo:


```
{
  "title": "Velozes e furiosos 10",
  "rating": "6",
  "description": "Filme sobre carros",
  "director": "Louis Leterrier",
  "stars": ["Vin Diesel", "Jason Momoa"],
  "poster": "https://s2-gshow.glbimg.com/srEPJBTXJB3_KKThSe0zUSBdlz8=/0x0:1080x1351/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/Q/g/IPSDQ1SVKCAFBEjZsj0w/vin-diesel-poster.jpg"
}
```
- GET `/movie`: Rota para listar todos os filmes cadastrados.

- GET `/movie/:id`: Rota para consultar um filme pelo seu ID.

- DELETE `/movie/:id`: Rota para remover um filme pelo seu ID.

- PATCH `/movie/:id`: Rota para atualizar as informações de um filme pelo seu ID. Os dados devem ser enviados no formato JSON, seguindo o exemplo acima.

## 📝 Observações
Certifique-se de que o MongoDB está em execução antes de rodar o projeto.
Você pode alterar a porta em que a API está rodando no arquivo `config/default.ts`.



Feito por [Victor](https://www.linkedin.com/in/victornathanael/)
