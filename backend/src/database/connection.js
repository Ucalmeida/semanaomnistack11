/**
 * Arquivo criado para fazer a conexão com o nosso Banco de Dados
 */

 const knex = require('knex');
 const configuration = require('../../knexfile');

 const connection = knex(configuration.development);

 module.exports = connection;