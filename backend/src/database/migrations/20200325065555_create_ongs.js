/**
 * Para criar uma nova tabela utiliza o exports.up
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/**
 * Depois dá o comando no terminal: npx knex migrate:latest
 * Isso cria a tabela. Vai dar um erro de promise, caso não tenha colocado o comando return
 * antes do comando knex.schema
 */