/**
 * No id teremos table.increments(), que gerará a chave de forma automática
 * Para value, armazenaremos o valor em decimal
 * Cria uma coluna ong_id e depois a referencia à coluna id da tabela ongs
 */
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

/**
 * Digitar npx knex migrate:rollback desfaz a última migration feita
 * Caso tenha errado alguma coisa e deseje desfazer, use esse comando
 * Listar as migrations executadas: npx knex migrate:status
 */