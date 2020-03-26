const express = require('express');
const cors = require('cors');

/**
 * O './' é para referenciar um arquivo. Caso eu quisesse referenciar um arquivo
 * de uma pasta anterior eu utilizaria '../'
 * Esse './' diz que meu arquivo routes.js está na mesma pasta do meu arquivo index.js
 */
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
// Esse código agora sempre deve vir após o express.json
app.use(routes);

/** 
 * Rota / Recurso
 */

/** 
 * Métodos HTTP:
 * GET: Buscar/Listar um informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */

/**
 * Tipos de Parâmetro:
 * 
 * Query Params: Parâmetros nomeados enviados na Rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where('filtro')
 */

/**
 * Instalar o knex: npm install knex
 * Depois instalar o sqlite3: npm install sqlite3
 * Criar um arquivo na raiz do nosso projeto chamado knexfile.js: 
 * npx knex init --> Comando npx executa um pacote / Comando npm instala um pacote
 * Reestruturar o projeto criando uma pasta src e add a ela o arquivo index.js
 * Renomear no arquivo package.json o caminho do nodemon para nodemon src/index.js
 */

/**
 * Exemplo usando Query Params:
 * localhost:3333/users?page=2&nome=Urian&idade=42 --> Usado no Insomnia
 * app.get('/users', (request, response) => {
 *  const params = request.query;
 *
 *  console.log(params);
 *
 *  return response.json({
 *     "evento": "Semana OmniStack 11.0",
 *     "aluno": "Urian Almeida"
 *  });
 *});
 */

/** 
 * Exemplo usando Route Params:
 * app.get('/users/:id', (request, response) => {
 *   const params = request.params;
 * 
 *   console.log(params);
 * 
 *   return response.json({
 *       "evento": "Semana OmniStack 11.0",
 *       "aluno": "Urian Almeida"
 *   });
 * });
 */

// Exemplo usando Request Body:
/* app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        "evento": "Semana OmniStack 11.0",
        "aluno": "Urian Almeida"
    });
}); */

// Foi instalado o nodemon através do npm install nodemon -D(Esse -D é para instalar o nodemon apenas
// para ser usado durante o desenvolvimento)
// Depois vai no arquivo package.json e altera "test" para "start" e modifica o texto para "nodemon index.js"
// Quando digitar npm start no terminal, vai iniciar o servidor node pelo arquivo index.js e vai manter
// sempre atualizado toda vez que for feita qualquer mudança no código

app.listen(3333);